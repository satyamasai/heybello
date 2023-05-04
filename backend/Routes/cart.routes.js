const express = require("express");
const { addToCart } = require("../Controller/cart.controller");
const { Authentication } = require("../Middlewares/Authentication");
const { Router } = express;
const cartRouter = Router();

cartRouter.post("/addtocart",Authentication, addToCart);

module.exports = { cartRouter };
