var jwt = require("jsonwebtoken");
const { userModel } = require("../Models/user.model");
require("dotenv").config();
const bcrypt = require("bcrypt");

// ---------user signup----------------
const userSignup = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  console.log(name, email, password, mobile);
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.send({
        message: "User already exists!",
        status: "Exist",
      });
    } else {
      bcrypt.hash(password, 4, async (err, hash_password) => {
        if (err) {
          res.send({ message: "Something went wrong", status: "Failed" });
        } else {
          const new_user = new userModel({
            name: name,
            email: email,
            mobile: mobile,
            password: hash_password,
          });
          await new_user.save();
          res.send({ message: "Signup Successfull", status: "Success" });
        }
      });
    }
  } catch (err) {
    res.send({ message: "Something went wrong", status: "Error" });
    console.log(err);
  }
};

//--########################################-------------------------------

// ###########------LOG-IN-----------------#################################-----------

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  console.log(user, "user");
  if (user) {
    const { name, email, mobile } = user;
    const hashed_password = user.password;
    const user_id = user._id;
    bcrypt.compare(password, hashed_password, async (err, result) => {
      if (err) {
        res
          .status(500)
          .send({ message: "Something went wrong", status: "Error" });
      } else {
        if (result) {
          let token = jwt.sign({ user_id }, process.env.SECRET_KEY);
          res.send({
            message: "Login successful",
            token: token,
            id: user._id,
            name,
            mobile,
            email,
          });
        } else {
          res.status(500).send({ message: "Login failed", status: "Failed" });
        }
      }
    });
  } else {
    res.status(500).send({
      message: "User Does not exist, please login with correct credentials..",
      status: "Failed",
    });
  }
};

// ##---------------------exports--------
module.exports = {
  userSignup,
  userLogin,
};
