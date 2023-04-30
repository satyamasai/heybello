





const CartItemModel = require('../models/cartItemModel');

exports.addToCart = async (req, res) => {
  const { productId, quantity, price } = req.body;
  const { userId } = req.params;

  try {
    // Check if the item is already in the cart
    const existingCartItem = await CartItemModel.findOne({ productId, userId });

    if (existingCartItem) {
      // If the item is already in the cart, update the quantity and price
      existingCartItem.quantity += quantity;
      existingCartItem.price += price;
      await existingCartItem.save();
      return res.status(200).json(existingCartItem);
    } else {
      // If the item is not in the cart, create a new cart item
      const newCartItem = new CartItemModel({
        productId,
        quantity,
        price,
        userId
      });
      await newCartItem.save();
      return res.status(200).json(newCartItem);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};
