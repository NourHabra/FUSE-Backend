const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRequest } = require('../middleware/validationMiddleware');
const {signInSchema,signUpSchema, signUpSchemaEmployee} = require('../validationSchemas');
const {authenticateJWT} = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/authRole')
const encry = require('../middleware/encryptionMiddleware')

router.use(encry.decryption);

router.post('/login', validateRequest(signInSchema), authController.login);
router.post('/dashboard/login', validateRequest(signInSchema), authController.loginDashboard);
router.post('/register', validateRequest(signUpSchema), authController.register);
router.post('/register/employee', authenticateJWT, isAdmin, validateRequest(signUpSchemaEmployee), authController.registerEmployee);
router.get('/logout', authController.logout);


module.exports = router;
