const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product_details: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

const CartItemModel = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItemModel;