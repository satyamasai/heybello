const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  api_featured_image: { type: String },
  brand: { type: String },
  category: { type: String },
  created_at: { type: String },
  currency: { type: String },
  description: { type: String },
  id: { type: Number },
  image_link: { type: String },
  name: { type: String },
  price: { type: String },
  price_sign: { type: "String" },
  product_api_url: { type: String },
  product_colors: [],
  product_link: { type: String },
  product_type: { type: String },
  rating: { type: Number },
  tag_list: [],
  updated_at: { type: String },
  website_link: { type: String },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProducModel;
