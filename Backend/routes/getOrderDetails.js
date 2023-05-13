const router = require("express").Router();
const OrderDetails = require("../models/orderDetails");
router.route("/getorder").get(async (req, res) => {
  try {
    const resData = await OrderDetails.find();
    return res.json(resData);
  } catch (error) {
    console.log(error);
  }
});

router.route("/getorder:orderId/").get(async (req, res) => {
  try {
    await OrderDetails.findBy({ orderId: req.params.orderId }).then((order) => {
      console.log(order);
    });
    console.log(data);
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
