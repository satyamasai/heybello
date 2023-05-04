const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id:{type:Number,required:true},
  product_details: { type: Object, required:true, ref: 'Product' },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, requires:true, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

const CartItemModel = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItemModel;