const mongoose = require("mongoose");
const OrderDetailsSchema = new mongoose.Schema(
  {
    orderId: { type: String },
    itemCode: { type: String, required: true },
    itemName: { type: String, required: true },
    qty: { type: Number, required: true },
    itemPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);
const OrderDetailsModel = mongoose.model("orderDetails", OrderDetailsSchema);
module.exports = OrderDetailsModel;
