const express = require("express");
const razorpayRouter = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

// ---order api
razorpayRouter.post("/order", async (req, res) => {
  console.log(req.body);

  try {
    const instance = new Razorpay({
      key_id: process.env.R_KEY_ID,
      key_secret: process.env.R_KEY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ msg: "Something went wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error!" });
  }
});

// ---payment verify api---
razorpayRouter.post("/verify", async (req, res) => {
  console.log(req.body,"in verifyyy.");
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.R_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ msg: "Payment verified successfully!" });
    } else {
      return res.status(400).json({ msg: "Invalid signature sent!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = razorpayRouter;
