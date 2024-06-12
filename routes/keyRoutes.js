const express = require('express');
const router = express.Router();
const encry = require("../middleware/encryptionMiddleware")

router.post('/generate', encry.genKeys);
router.post('dashboard/generate', encry.genKeysDashboard);

module.exports = router;
