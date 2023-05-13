const mongoose = require("mongoose");
const ItemCodeModel = require("./models/itemCode");
const itemCodeModel = require("./models/itemCode");
const uri = process.env.URI;
module.exports = async () => {
  try {
    mongoose.connect(uri, {});
    const data = ItemCodeModel.find({});
    if (data == null) {
      const itemCode = new ItemCodeModel({ itemCode: "001" });
      await itemCode.save();
    }

    console.log("Connected to Database Sucessfully!!!");
  } catch (error) {
    console.log(error);
    console.log("Connection Failed");
  }
};
