const Order = require('../Models/OrderModel');

module.exports.Makeorder = async(req, res) => {
  try{
    const { selectedItem, seller, buyer } = req.body;
    console.log("Processing order...");

    const order = await Order.create({ selectedItem, seller, buyer })
    console.log("Order almost ready...");

    return res.status(201).json({
      message: "Order placed successfully",
      success: true,
      order
    });

  }
  catch(err){
    console.error(err);
  }
}
