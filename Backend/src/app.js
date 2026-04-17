const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");

const NftRoute = require("./routes/Nft.route.js");


const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // ✅ tera React app ka URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use("/api/nft",NftRoute);
module.exports = app; 