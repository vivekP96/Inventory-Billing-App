const router = require("express").Router();
const Product = require("../models/products");
router.route("/deletestock/:id").delete(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)

    .then(() => {
      res.json("Product deleted Sucessfully!!!");
    })
    .catch((error) => {
      res.status(400).json("Error :" + error);
    });
});
module.exports = router;
