const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');


//router.get('/create', cardController.create);

router.get('/', cardController.index);
router.post('/', cardController.store);
router.get('/:id', cardController.show);
router.put('/:id', cardController.update);
router.delete('/:id', cardController.destroy);

module.exports = router;
