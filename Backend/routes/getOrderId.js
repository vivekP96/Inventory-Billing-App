const router = require("express").Router();
const OrderIdModel = require("../models/orderId");

router.route("/getodid").get(async (req, res) => {
  try {
    const respData = await OrderIdModel.find();
    return res.json(respData);
  } catch (error) {
    console.log(error);
  }
});
router.route("/updateorderid").put(async (req, res) => {
  let respData = await OrderIdModel.findOne();
  respData = JSON.parse(JSON.stringify(respData));
  let { orderId } = respData;
  if (Number(orderId) + 1 < 10) {
    orderId = `00${Number(orderId) + 1}`;
  } else if (Number(orderId) + 1 < 99) {
    orderId = `0${Number(orderId) + 1}`;
  } else {
    orderId = orderId + 1;
  }
  await OrderIdModel.updateOne({ orderId });
  return res.json(orderId);
});

router.route("/createid").post(async (req, res) => {
  await OrderIdModel.find().then((res) => {
    console.log(res);
  });

  const orderId = req.body.orderId;

  const newOrderId = new OrderIdModel({
    orderId,
  });
  newOrderId
    .save()
    .then(() => {
      res.json("New OrderId Added Sucessfully!!!");
    })
    .catch((err) => {
      res.send(err.message);
    });
});
module.exports = router;
