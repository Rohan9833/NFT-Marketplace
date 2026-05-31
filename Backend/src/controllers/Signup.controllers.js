const UserModel = require("../model/user.model")
const bcrypt = require("bcrypt")


async function Signup(req,res) {
    console.log("Signup route hit");
    console.log(req.body)
    const {name,email,password} = req.body;

    if(!email||!password||!name){
        return res.status(4044).json({"message":"enter all the data"});
    }

    let userexists = await UserModel.findOne({email});

    if(userexists){
        return res.status(409).json({"message":"User already Exists"})
    }

    const Hashedpassword = await bcrypt.hash(password,7)


    const user = await UserModel.create({
        name,
        email,
        password:Hashedpassword
    })

    return res.status(200).json({"message":"user created "})

    



}


module.exports = { Signup };