const crypto = require('crypto');
const userService = require('../services/userService');

let keys = {};

async function genKeys(req, res) {
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
}

async function decryption(req, res, next) {
  if (!req.body) return next();
  try {
    const { payload } = req.body;
    const decrypted = decrypt(payload, keys[req.user.userId]);
    req.body.values = JSON.parse(decrypted);
    console.log('Decrypted message: ', decrypted);
    next();
  } catch (error) {
    console.error('Error decrypting message:', error);
    res.status(500).json({ error: "Failed to decrypt message" });
  }
}

async function encryption(data, userId) {
  try {
    data = JSON.stringify(data);
    const encrypted = encrypt(data, keys[userId]);
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

module.exports = {
  genKeys,
  encryption,
  decryption
};
