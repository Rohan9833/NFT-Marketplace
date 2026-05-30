const express = require('express');
const Login = require("../controllers/Login.controllers.js");
const Signup = require("../controllers/Signup.controllers.js");


const router = express.Router();


// router.post("/login", Login);
router.post("/signup", Signup.Signup);

module.exports = router;
