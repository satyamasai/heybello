const express = require("express");
const { connection } = require("./Config/db");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to hey bello..!!!" });
});







// ----Listening ---------
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connected successfull.....");
    console.log("app is running on PORT :" + process.env.PORT);
  } catch (err) {
    console.log("Database connection failed.....");
    console.log(err);
  }
});
