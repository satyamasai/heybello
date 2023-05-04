const axios = require("axios");
const { ProductModel } = require("../Models/product.model");

const addProduct = async (req, res) => {
  const {
    api_featured_image,
    brand,
    category,
    created_at,
    currency,
    description,
    id,
    image_link,
    name,
    price,
    price_sign,
    product_api_url,
    product_colors,
    product_link,
    product_type,
    rating,
    tag_list,
    updated_at,
    website_link,
  } = req.body;
};

// ----api for gettong products

const getProducts = async (req, res) => {
    // const {brand_name}= req.body
  try {

    const products = await ProductModel.find({"rating": {$gte:5}});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

// ----------##-- get products by brand----//

const getProductsByBrand = async (req, res) => {
    const {brand}= req.params
  try {
console.log(brand,"brand anmemmememem")
    const products = await ProductModel.find({"brand": brand});
    res.send(products);
    // console.log(products)
  } catch (err) {
    console.log(err);
  }
};




module.exports = {
  addProduct,
  getProducts,
  getProductsByBrand
};
