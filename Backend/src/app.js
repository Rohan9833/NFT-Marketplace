const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");

const NftRoute = require("./routes/Nft.route.js");
const authenticationRoutes = require("./routes/authentication.routes.js");

const TokenRoute = require("./routes/Token.route.js");


const app = express();
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173', // React app ka URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

<<<<<<< HEAD



=======
app.use("/api/authentication",authenticationRoutes)
>>>>>>> fe40bf714e5c379e6c9f115228d90865a624dd89
app.use("/api/nft",NftRoute);

app.use("/api/token",TokenRoute);
module.exports = app; 