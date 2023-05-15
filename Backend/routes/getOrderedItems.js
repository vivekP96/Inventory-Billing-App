const OrderDetailsModel = require("../models/orderDetails");
const OrderIdModel = require("../models/orderId");

const router = require("express").Router();
router.route("/getordereditems").post(async (req, res) => {
  try {
    let items = await OrderDetailsModel.find();
    const resArr = [];
    const ordervalues = [];
    if (items) {
      items = JSON.parse(JSON.stringify(items));

      let itemcode = await OrderIdModel.find();
      itemcode = JSON.parse(JSON.stringify(itemcode));
      // console.log(itemcode);
      itemcode = Number(itemcode[0].orderId);

      for (let i = 1; i < itemcode; i++) {
        ordervalues.push(`ODNOSVSWH-00${i}`);
      }

      for (let itemid of ordervalues) {
        const filteredArr = items.filter((item) => item.orderId == itemid);
        resArr.push({ orderId: itemid, filteredArr });
      }
    }
    return res.send(resArr);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
