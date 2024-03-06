const express = require("express");
const router = express.Router();
const userprofileController = require("../controllers/userprofileController");

router.post("/users", userprofileController.createUser);

module.exports = router;
