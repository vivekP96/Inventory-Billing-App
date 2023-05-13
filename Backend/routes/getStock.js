const router = require("express").Router();
const Product = require("../models/products");
router.route("/getstock").get(async (req, res) => {
  try {
    await Product.find().then((products) => {
      res.json(products);
    });
  } catch (error) {
    res.send("Error :" + error);
  }
});
module.exports = router;
