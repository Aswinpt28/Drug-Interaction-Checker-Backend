/* eslint-disable no-unused-vars */
const express = require("express");
const cookieParser = require("cookie-parser");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.use(cookieParser());

router.post("/user/login", authController.userLogin);
router.post("/admin/login", authController.adminLogin);
router.post("/register", authController.register);
router.post("/registerAdmin", authController.registerAdmin);

module.exports = router;
