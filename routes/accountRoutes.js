const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const { validateRequest } = require('../middleware/validationMiddleware');
const { createAccountSchema, updateAccountSchema } = require('../validationSchemas')


//router.get('/create', accountController.create);

router.get('/', accountController.index);
router.post('/', validateRequest(createAccountSchema), accountController.store);
router.get('/:id', accountController.show);
router.put('/:id', validateRequest(updateAccountSchema), accountController.update);
router.delete('/:id', accountController.destroy);

module.exports = router;
