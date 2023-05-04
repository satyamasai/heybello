const CartItemModel = require("../Models/cart.model");

const addToCart = async (req, res) => {
  const { id, price, user_id } = req.body;
  // console.log(req.body,"rb")
  // const { userId } = req.params;

  try {
    // Check if the item is already in the cart
    const existingCartItem = await CartItemModel.findOne({ id, user_id });
    // console.log(existingCartItem, "ECI");
    if (existingCartItem) {
      // If the item is already in the cart, update the quantity and price
      existingCartItem.quantity += 1;
      existingCartItem.price += price;
      await existingCartItem.save();
      return res.status(200).json(existingCartItem);
    } else {
      // If the item is not in the cart, create a new cart item
      const newCartItem = new CartItemModel({
        product_details: req.body,
        id,
        quantity: 1,
        price: +price,
        user_id,
      });
      await newCartItem.save();
      return res.status(200).json(newCartItem);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
// ------##---get cart items api----##-----

const getCartItems = async (req, res) => {
  const { user_id } = req.body; // assuming you pass the user ID as a parameter in the URL
  try {
    const cart = await CartItemModel.find({ user_id }); // assuming you have a reference to the product in your cart schema

    if (!cart) {
      // if the cart is not found for the user
      return;
      return res.status(404).json({ message: "Cart not found" });
    }

    // if the cart is found, return the items
    res.send({ cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// -----### ---delete item from cart ---api---###////

const deleteItem = async (req, res) => {
  const { user_id } = req.body;
  const { id } = req.params;
  try {
    await CartItemModel.findOneAndDelete({ user_id, id });
    res.send({ msg: "Item deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something went wrong" });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  deleteItem,
};
