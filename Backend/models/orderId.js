const mongoose = require("mongoose");
const OrderIdSchema = new mongoose.Schema(
  {
    orderId: { type: String, default: 01 },
  },
  { timestamps: true }
);
const OrderIdModel = mongoose.model("orderId", OrderIdSchema);

module.exports = OrderIdModel;
