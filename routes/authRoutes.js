const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateSignUp, validateSignIn } = require('../middleware/validationMiddleware');

router.post('/login', validateSignIn, authController.login);
router.post('/register',validateSignUp, authController.register);
router.get('/logout', authController.logout);

module.exports = router;
