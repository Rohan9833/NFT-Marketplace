const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");

const Nft = require("./routes/Nft.route.js");


const app = express();


app.use("/api/createnft",Nft);
module.exports = app; 