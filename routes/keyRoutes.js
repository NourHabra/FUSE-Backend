const express = require('express');
const router = express.Router();
const encry = require("../middleware/encryption")

router.post('/generate', encry.genKeys);
router.post('dashboard/generate', encry.genKeysDashboard);

module.exports = router;
