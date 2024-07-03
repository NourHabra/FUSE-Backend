const express = require('express');
const router = express.Router();
const encry = require("../middleware/encryptionMiddleware")
const encryM = require('../middleware/mobileEncryptionMiddleware')
const encryR = require('../middleware/regMobileEncryptionMiddleware')

// dashboard
router.post('/dashboard/generate', encry.genKeysDashboard);

// mobile
router.post('/publicKey', encryM.genPublicKey);
router.post('/setAESkey', encryM.getAESkey);

// mobile register new user
router.post('/reg/publicKey', encryR.genPublicKeyForReg);
router.post('/reg/setAESkey', encryR.getAESkey);

module.exports = router;
