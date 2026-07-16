const express = require('express');
const CreatesNft = require("../controllers/CreateNft.controllers.js");
const ListNft = require("../controllers/Listnft.controllers.js");

const multer = require('multer');
const CreateToken = require("../controllers/CreateToken.controllers.js");
const storage = multer.memoryStorage();

const upload = multer({ storage }); // ✅ sirf const, no export

const router = express.Router();

router.post("/createnft",upload.single('image'), CreatesNft.CreateNft);
router.post("/listnft", ListNft.ListNft);

router.post("/createtoken", CreateToken.CreateToken);

router.get("/testtoken", (req, res) => {
  res.json({
    success: true,
    message: "Token Route Working",
  });
});

module.exports = router;