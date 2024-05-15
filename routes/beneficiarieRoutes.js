const express = require('express');
const router = express.Router();
const beneficiarieController = require('../controllers/beneficiarieController');


//router.get('/create', beneficiarieController.create);

router.get('/', beneficiarieController.index);
router.post('/', beneficiarieController.store);
router.get('/:id', beneficiarieController.show);
router.put('/:id', beneficiarieController.update);
router.delete('/:id', beneficiarieController.destroy);

module.exports = router;
