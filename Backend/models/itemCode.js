const mongoose = require("mongoose");
const ItemCodeSchema = new mongoose.Schema(
  {
    itemCode: { type: String, default: 01 },
  },
  { timestamps: true }
);
const ItemCodeModel = mongoose.model("itemCode", ItemCodeSchema);

module.exports = ItemCodeModel;
