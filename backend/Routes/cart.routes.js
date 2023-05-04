const express = require("express");
const { addToCart, getCartItems, deleteItem } = require("../Controller/cart.controller");
const { Authentication } = require("../Middlewares/Authentication");
const { Router } = express;
const cartRouter = Router();

cartRouter.post("/addtocart",Authentication, addToCart);
cartRouter.get("/getcartitems",Authentication, getCartItems);
cartRouter.delete("/deleteitem/:id",Authentication, deleteItem);

module.exports = { cartRouter };
