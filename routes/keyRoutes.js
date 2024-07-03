const express = require('express');
const router = express.Router();
const encry = require("../middleware/encryptionMiddleware")
const encryM = require('../middleware/mobileEncryptionMiddleware')

//router.post('/generate', encry.genKeys);
router.post('/dashboard/generate', encry.genKeysDashboard);

router.post('/publicKey', encryM.genPublicKey);
router.post('/publicKey/email', encryM.genPublicKey);
router.post('/setAESkey', encryM.getAESkey);

module.exports = router;
