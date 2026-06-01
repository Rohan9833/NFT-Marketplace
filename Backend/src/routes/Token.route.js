const express = require('express');
const multer = require('multer');
const CreateToken = require("../controllers/CreateToken.controllers.js");
const storage = multer.memoryStorage();

const upload = multer({ storage }); 

const router = express.Router();


router.post("/createtoken", CreateToken.CreateToken);



module.exports = router;