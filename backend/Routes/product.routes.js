const express = require("express");
const { Router } = express;
const productRouter = Router();
const {addProduct} = require('../Controller/product.controller')



productRouter.get("/addproduct", addProduct);

module.exports={productRouter}