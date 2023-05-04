const express = require("express");
const { Router } = express;
const productRouter = Router();
const {addProduct, getProducts, getProductsByBrand, getProductsByType} = require('../Controller/product.controller')



productRouter.get("/addproduct", addProduct);
productRouter.get("/getproducts", getProducts);
productRouter.get("/getproductsbybrand/:brand", getProductsByBrand);
productRouter.get("/getproductsbyType/:type", getProductsByType);

module.exports={productRouter}