const express = require("express");
const { Router } = express;
const productRouter = Router();
const {addProduct, getProducts} = require('../Controller/product.controller')



productRouter.get("/addproduct", addProduct);
productRouter.get("/getproducts", getProducts);

module.exports={productRouter}