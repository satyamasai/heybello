const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = (req, res, next) => {
    // console.log(req.headers,"headders")
  if (!req.headers.authorization) {
    res.send({ msg: "submit the token first..." });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];
// console.log(token,"TOKEM")
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const user_id = decoded.user_id;
  if (decoded) {
    req.body.user_id = user_id;
    next();
  } else {
    console.log("FAILD")
    res.send({ msg: "You are not logged in.." });
  }
};

module.exports = { Authentication };
