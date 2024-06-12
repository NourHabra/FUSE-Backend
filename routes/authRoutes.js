const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRequest } = require('../middleware/validationMiddleware');
const {signInSchema,signUpSchema} = require('../validationSchemas');
const {authenticateJWT} = require('../middleware/authMiddleware');


router.post('/login', validateRequest(signInSchema), authController.login);
router.post('/register', authenticateJWT, validateRequest(signUpSchema), authController.register);
router.get('/logout', authController.logout);


module.exports = router;
