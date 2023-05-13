const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    // itemId: { type: String, required: true },
    itemCode: { type: String, required: true },

    itemName: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema, "Product");

module.exports = Product;
