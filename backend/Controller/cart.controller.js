const CartItemModel = require("../Models/cart.model");


const addToCart = async (req, res) => {
  const { id, price ,user_id} = req.body;
  // console.log(req.body,"rb")
  // const { userId } = req.params;


  try {
    // Check if the item is already in the cart
    const existingCartItem = await CartItemModel.findOne({ id, user_id });
console.log(existingCartItem,"ECI")
    if (existingCartItem) {
      // If the item is already in the cart, update the quantity and price
      existingCartItem.quantity += 1;
      existingCartItem.price += price;
      await existingCartItem.save();
      return res.status(200).json(existingCartItem);
    } else {
      // If the item is not in the cart, create a new cart item
      const newCartItem = new CartItemModel({
        product_details:req.body,
        id,
        quantity:1,
        price:+price,
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


module.exports={
  addToCart
}