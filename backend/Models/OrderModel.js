const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderTitle: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  seller: {
    type:Object,
    required: true
  },
  buyer: {
    type:Object,
    required: true
  }
});

module.exports = mongoose.model("Order", orderSchema);
