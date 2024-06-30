const express = require('express');
const router = express.Router();
const encry = require("../middleware/encryptionMiddleware")

//router.post('/generate', encry.genKeys);
router.post('/dashboard/generate', encry.genKeysDashboard);

router.post('/publicKey', encry.genPublicKey);
router.post('/setAESkey', encry.getAESkey);

module.exports = router;
