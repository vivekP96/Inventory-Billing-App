const router = require("express").Router();
const OrderDetails = require("../models/orderDetails");
router.route("/createorder").post(async (req, res) => {
  await OrderDetails.find().then((res) => {
    console.log(res);
  });
  const orderId = req.body.orderId;
  const itemName = req.body.itemName;
  const itemCode = req.body.itemCode;
  const qty = req.body.qty;
  const itemPrice = req.body.itemPrice;
  const totalPrice = req.body.totalPrice;
  const newOrder = new OrderDetails({
    orderId,
    itemName,
    itemCode,
    itemPrice,
    totalPrice,
    qty,
  });
  newOrder
    .save()
    .then(() => {
      res.json("Order Created Successfully!!!");
    })
    .catch((err) => {
      res.json(err.message);
    });
});
module.exports = router;
