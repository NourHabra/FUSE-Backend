const crypto = require('crypto');
const userService = require('../services/userService');

let keys = {};

async function genKeys(req, res) {
  const { email, clientPublickey } = req.body;

  const user = await userService.findByEmail(email);
  if(!user) res.status(404).json({error: "user not found"});

  const server = crypto.createECDH('secp256k1');
  server.generateKeys();

  const serverPublicKeyBase64 = server.getPublicKey().toString('base64');
  const sharedKey = server.computeSecret(Buffer.from(clientPublickey, 'base64'), null, 'hex');
  keys[user.id] = sharedKey;
  console.log(`Shared Key: ${sharedKey} for ${email}`);

  res.json({ serverPublicKey: serverPublicKeyBase64});
}

async function decryption (req, res, next) {
  if(!req.body) return next();
  const { payload } = req.body;
  const decrypted = decrypt(payload, keys[req.user.userId]);
  req.body.values = JSON.parse(decrypted);
  console.log('Decrypted message: ', decrypted);
  next();
}

async function encryption({data}){
  data = JSON.stringify(data);
  const encrypted = encrypt(data, keys[data.userId]);
  return encrypted;
}

function encrypt(message, sharedKey) {
  const IV = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(sharedKey, 'hex'), IV);

  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const auth_tag = cipher.getAuthTag().toString('hex');

  const payload = IV.toString('hex') + encrypted + auth_tag;
  const payload64 = Buffer.from(payload, 'hex').toString('base64');

  return payload64;
}

function decrypt(payload, sharedKey) {
  const payloadHex = Buffer.from(payload, 'base64').toString('hex');

  const iv = payloadHex.slice(0, 32);
  const encrypted = payloadHex.slice(32, payloadHex.length - 32);
  const auth_tag = payloadHex.slice(payloadHex.length - 32);

  const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(sharedKey, 'hex'), Buffer.from(iv, 'hex'));
  decipher.setAuthTag(Buffer.from(auth_tag, 'hex'));

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}


module.exports = {
  genKeys,
  encryption,
  decryption
}