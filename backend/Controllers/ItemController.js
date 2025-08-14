const Item = require('../Models/ItemModel');

module.exports.Additem = async (req, res) => {
  try{
    const { title, description, price, category, seller } = req.body;
      console.log("Creating item...");
      const item = await Item.create({title, description, price, category, seller});

      console.log("Send response...");
      return res.status(201).json({ message: "Item successfully added", success: true, item });
  } catch(err){
    console.error(err);
  }
}

module.exports.GetItems = async (req, res) => {
  try{
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
