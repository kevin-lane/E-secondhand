const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, fullName, telephone } = req.body;
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }
    else{
      console.log("Creating user...");
      const user = await User.create({ email, password, fullName, telephone });
      console.log("Creating token and setting cookie...");

      console.log("Sending response...");
      return res.status(201)
      .json({ message: "User sign in successfully", success: true, user });
    }
  } catch (error){
    console.error(error);
  }
}

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
  .then(user => {
    console.log("User: " + user);
    if(user){

      if(user.password === password){
        res.json({ success: true, message: "Success", user });
      }
      else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record existed")
    }
  })
}
