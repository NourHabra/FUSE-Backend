const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { validateRequest } = require('../middleware/validationMiddleware');
const { isAdminEmpVen } = require('../middleware/authRole');
const { 
    createTransferSchema,
    createBillSchema, 
    createDWSchema, 
    payBillSchema, 
    updateTransactionSchema 
} = require('../validationSchemas');

//router.get('/create', transactionController.create);

router.post('/all', transactionController.index);
router.post("/topUp", transactionController.showTopUp);
router.post('/fromTo', transactionController.showTransactionsFromTo);
//router.post('/', transactionController.store);
router.post('/bill', validateRequest(createBillSchema), transactionController.storeBill);
router.post('/transferer', validateRequest(createTransferSchema), transactionController.storeTransfer);
router.post('/deposit', isAdminEmpVen, validateRequest(createDWSchema), transactionController.storeDeposit);
router.post('/withdraw', validateRequest(createDWSchema), transactionController.storeWithdraw);
router.post('/payBill/:id', validateRequest(payBillSchema), transactionController.payBill);
router.post('/:id', transactionController.show);
router.put('/:id', validateRequest(updateTransactionSchema), transactionController.update);
router.delete('/:id', transactionController.destroy);

module.exports = router;
