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

module.exports = {
  addProduct,
};
