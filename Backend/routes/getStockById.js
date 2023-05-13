const router = require("express").Router();
const Product = require("../models/products");
router.route("/getstock/:id").get(async (req, res) => {
  try {
    await Product.findById(req.params.id).then((product) => {
      res.json(product);
    });
  } catch (error) {
    res.send("Error :" + error);
  }
});
module.exports = router;
