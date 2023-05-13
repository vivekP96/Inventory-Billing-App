const router = require("express").Router();
const Product = require("../models/products");
const ItemCodeModel = require("../models/itemCode");
router.route("/addstock").post(async (req, res) => {
  await ItemCodeModel.find().then((res) => {
    console.log(res);
  });

  const itemCode = req.body.itemCode;

  const itemName = req.body.itemName;
  const category = req.body.category;
  const brand = req.body.brand;
  const size = req.body.size;
  const price = req.body.price;
  const date = new Date();
  const newStock = new Product({
    itemCode,
    itemName,
    category,
    brand,
    size,
    price,
    date,
  });
  newStock
    .save()
    .then(() => {
      res.json("Stock Added Sucessfully!!!");
    })
    .catch((err) => {
      res.send(err.message);
    });
});
module.exports = router;
