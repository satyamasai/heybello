const express = require("express");
const { Router } = express;
const productRouter = Router();
const {addProduct, getProducts, getProductsByBrand} = require('../Controller/product.controller')



productRouter.get("/addproduct", addProduct);
productRouter.get("/getproducts", getProducts);
productRouter.get("/getproductsbybrand/:brand", getProductsByBrand);

module.exports={productRouter}