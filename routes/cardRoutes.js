const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const { validateRequest } = require('../middleware/validationMiddleware');
const { createCardSchema, updateCardSchema } = require('../validationSchemas');

//router.get('/create', cardController.create);

router.get('/', cardController.index);
router.post('/', validateRequest(createCardSchema), cardController.store);
router.get('/:id', cardController.show);
router.put('/:id', validateRequest(updateCardSchema), cardController.update);
router.delete('/:id', cardController.destroy);

module.exports = router;
