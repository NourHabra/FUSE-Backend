const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { validateRequest } = require('../middleware/validationMiddleware');
const { createTransferSchema,createBillSchema,createDepositSchema,createWithdrawSchema,payBillSchema } = require('../validationSchemas');
const { isAdminEmpVen } = require('../middleware/authRole');

//router.get('/create', transactionController.create);

router.get('/', transactionController.index);
router.get('/fromTo', transactionController.showTransactionsFromTo);
//router.post('/', transactionController.store);
router.post('/bill', validateRequest(createBillSchema), transactionController.storeBill);
router.post('/transferer', validateRequest(createTransferSchema), transactionController.storeTransfer);
router.post('/deposit', isAdminEmpVen, validateRequest(createDepositSchema), transactionController.storeDeposit);
router.post('/withdraw', validateRequest(createWithdrawSchema), transactionController.storeWithdraw);
router.post('/payBill/:id', validateRequest(payBillSchema), transactionController.payBill);
router.get('/:id', transactionController.show);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.destroy);

module.exports = router;
