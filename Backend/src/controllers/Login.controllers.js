const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(4044).json({ message: "enter all the data" });
  }

  let userexists = await UserModel.findOne({ email });

  if (!userexists) {
    return res.status(409).json({ message: "User Not Found" });
  }

  const matchpassword = await bcrypt.compare(password, userexists.password);

  if (!matchpassword) {
    return res.status(404).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: userexists._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost pe false
      sameSite: "lax",
    })
    .status(200)
    .json({
      message: "user LOGGEDin",
    });
}

module.exports = { login };
