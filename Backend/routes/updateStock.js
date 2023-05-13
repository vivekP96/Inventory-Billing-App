const router = require("express").Router();
const Product = require("../models/products");
router.route("/updatestock/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const category = req.body.category;
    await Product.findByIdAndUpdate(id, { category: category });
    res.send(`Product Category Updated to ${category} Sucessfully!!!`);
  } catch (error) {
    res.status(404).json("Eroor:" + error);
  }
});
module.exports = router;
