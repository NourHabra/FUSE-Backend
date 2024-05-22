const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');


//router.get('/create', transactionController.create);

router.get('/', transactionController.index);
//router.post('/', transactionController.store);
router.post('/bill', transactionController.storeBill);
router.post('/transferer', transactionController.storeTransferer);
router.post('/deposit', transactionController.storeDeposit);
router.post('/withdraw', transactionController.storeWithdraw);
router.get('/:id', transactionController.show);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.destroy);

module.exports = router;
