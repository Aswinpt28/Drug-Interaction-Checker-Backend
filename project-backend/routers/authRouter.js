const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/user/login', authController.userLogin);
router.post('/admin/login', authController.adminLogin);
router.post('/register', authController.register);
router.post('/registerAdmin', authController.registerAdmin);



module.exports = router;
