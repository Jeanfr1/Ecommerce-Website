const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");

const router = express.Router();

// Registrar novo usuário
router.post("/register", registerUser);

// Login de usuário
router.post("/login", authUser);

module.exports = router;
