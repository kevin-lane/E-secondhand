const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  selectedItem: {
    type: Object,
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
