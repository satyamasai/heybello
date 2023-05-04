const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  api_featured_image: { type: String, required: true },
  brand: { type: String },
  category: { type: String },
  created_at: { type: String, required: true },
  currency: { type: String },
  description: { type: String },
  id: { type: Number, required: true },
  image_link: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, default:'10' },
  price_sign: { type: "String" },
  product_api_url: { type: String, required: true },
  product_colors: { type: Array, required: true },
  product_link: { type: String, required: true },
  product_type: { type: String, required: true },
  rating: { type: Number ,default:1 },
  tag_list: { type: Array, required: true },
  updated_at: { type: String, required: true },
  website_link: { type: String, required: true },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
