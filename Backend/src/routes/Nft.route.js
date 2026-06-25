const express = require('express');
const CreatesNft = require("../controllers/CreateNft.controllers.js");
const ListNft = require("../controllers/Listnft.controllers.js");

const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({ storage }); // ✅ sirf const, no export

const router = express.Router();

router.post("/createnft",upload.single('image'), CreatesNft.CreateNft);
router.post("/listnft", ListNft.ListNft);

module.exports = router;