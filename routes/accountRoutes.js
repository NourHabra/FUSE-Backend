const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');


//router.get('/create', accountController.create);

router.get('/', accountController.index);
router.post('/', accountController.store);
router.get('/:id', accountController.show);
router.put('/:id', accountController.update);
router.delete('/:id', accountController.destroy);

module.exports = router;
