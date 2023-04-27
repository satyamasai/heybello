const express = require("express");
const { Router } = express;
const userRouter = Router();

const { userSignup, userLogin } = require("../Controller/user.controller");

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);

module.exports = {
  userRouter
};
