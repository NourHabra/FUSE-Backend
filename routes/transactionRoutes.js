const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { validateRequest } = require('../middleware/validationMiddleware');
const { isEmployee } = require('../middleware/authRole');
const { 
    createTransferSchema,
    createBillSchema, 
    createDWSchema, 
    payBillSchema, 
    updateTransactionSchema 
} = require('../validationSchemas');
const encry = require('../middleware/encryptionMiddleware')

//router.get('/create', transactionController.create);

router.post('/all', transactionController.index);
router.post("/topUp", encry.decryption, transactionController.showTopUp);
router.post('/fromTo', encry.decryption, transactionController.showTransactionsFromTo);
//router.post('/', transactionController.store);
router.post('/transferer', validateRequest(createTransferSchema), transactionController.storeTransfer);
router.post('/cash/deposit', isEmployee, encry.decryption, validateRequest(createDWSchema), transactionController.storeDeposit);
router.post('/cash/withdraw', isEmployee, encry.decryption, validateRequest(createDWSchema), transactionController.storeWithdraw);
router.post('/payBill/:id', validateRequest(payBillSchema), transactionController.payBill);
router.post('/:id', transactionController.show);
router.put('/:id', validateRequest(updateTransactionSchema), transactionController.update);
router.delete('/:id', transactionController.destroy);

module.exports = router;
