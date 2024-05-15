const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const authenticateJWT = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/authRole');

//router.get('/create', userController.create);

router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
