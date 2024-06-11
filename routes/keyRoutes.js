const express = require('express');
const router = express.Router();
const encry = require("../middleware/encryption")

router.post('/generate', encry.genKeys);

module.exports = router;
