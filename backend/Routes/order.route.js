const express= require('express');
const orderRouter= express.Router();
const { Authentication } = require("../Middlewares/Authentication");

orderRouter.post('/myorders',Authentication ,(req,res)=>{

   
})


module.exports={
    orderRouter
}



