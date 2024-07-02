const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');
const { validateRequest } = require('../middleware/validationMiddleware');
const { createBillSchema, payBillSchema } = require('../validationSchemas');
const { decryptionMobile } = require('../middleware/encryptionMiddleware');

//router.get('/create', billController.create);

router.put('/', decryptionMobile, validateRequest(createBillSchema), billController.store);
router.post('/pay/:id', decryptionMobile, validateRequest(payBillSchema), billController.pay);

module.exports = router;