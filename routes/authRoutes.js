const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRequest } = require('../middleware/validationMiddleware');
const {signInSchema,signUpSchema} = require('../validationSchemas')

router.post('/login', validateRequest(signInSchema), authController.login);
router.post('/register',validateRequest(signUpSchema), authController.register);
router.get('/logout', authController.logout);

module.exports = router;
