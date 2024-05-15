const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchantController');

const authenticateJWT = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/authRole');

//router.get('/create', merchantController.create);

router.get('/', merchantController.index);
router.get('/:id', merchantController.show);
router.put('/:id', merchantController.update);
router.delete('/:id', merchantController.destroy);

module.exports = router;
