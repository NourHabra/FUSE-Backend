const crypto = require('crypto');
const { handleError } = require('../controllers/errorController');
const userService = require('../services/userService');

let keys = {};

async function genKeys(req, res) {
  try{
    const { email, clientPublicKey } = req.body;

    const user = await userService.findByEmail(email);
    if (!user) return res.status(404).json({ error: "User not found" });

    const server = crypto.createECDH('prime256v1');
    server.generateKeys();

    const serverPublicKeyBase64 = server.getPublicKey().toString('base64');
    const sharedKey = server.computeSecret(Buffer.from(clientPublicKey, 'base64'), null, 'hex');
    keys[user.id] = sharedKey;

    console.log(`Shared Key: ${sharedKey} for ${email}`);

    return res.json({ serverPublicKey: serverPublicKeyBase64 });
  }catch(error){
    await handleError(error, res);
  }
}

async function decryption(req, res, next) {
  if (!req.body) return next();
  try {
    if (typeof req.body.email === 'undefined' && typeof req.user === 'undefined') {
      return res.status(400).json({ error: "Can't find keys without email or JWT" });
    }
    const { email } = req.body;
    const user = email ? await userService.findByEmail(email) : null;
    const userId = user ? user.id : (req.user ? req.user.id : undefined);
    if (typeof userId === 'undefined') {
      return res.status(401).json({ error: 'Invalid or missing JWT token' });
    }
    const { payload } = req.body;
    const decrypted = decrypt(payload, keys[userId]);
    req.body = JSON.parse(decrypted);

    console.log('Message Decrypted');

    next();
  } catch (error) {
    console.error('Error decrypting message:', error);
    res.status(500).json({ error: "Failed to decrypt message" });
  }
}


async function encryption(data, userId, email) {
  if (typeof email !== 'undefined'){
    const user = await userService.findByEmail(email);
    if (!user) return null;
    userId = user.id;
  } 

  try {
    data = JSON.stringify(data);
    const encrypted = encrypt(data, keys[userId]);
    console.log('Encrypted message: ', encrypted);
    return encrypted;
  } catch (error) {
    console.error('Error encrypting data:', error);
    throw new Error("Failed to encrypt data");
  }
}

function encrypt(message, sharedKey) {
  const IV = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(sharedKey, 'hex'), IV);

  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag().toString('hex');

  const payload = IV.toString('hex') + encrypted + authTag;
  const payload64 = Buffer.from(payload, 'hex').toString('base64');

  return payload64;
}

function decrypt(payload, sharedKey) {
  const payloadHex = Buffer.from(payload, 'base64').toString('hex');

  const iv = payloadHex.slice(0, 32);
  const encrypted = payloadHex.slice(32, -32);
  const authTag = payloadHex.slice(-32);

  const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(sharedKey, 'hex'), Buffer.from(iv, 'hex'));
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

async function makePayload(data, userId, email) {
  const dataS = JSON.stringify(data);
  console.log('Data to encrypt: ', dataS);
  const payload = await encryption(dataS, userId, email);
  return { payload };
}

module.exports = {
  genKeys,
  encryption,
  decryption,
  makePayload
};
