const router = require("express").Router();
const ItemCodeModel = require("../models/itemCode");
const itemCode = require("../models/itemCode");
router.route("/getcode").get(async (req, res) => {
  try {
    const respData = await itemCode.find();
    return res.json(respData);
  } catch (error) {
    console.log(error);
  }
});

router.route("/updatecode").put(async (req, res) => {
  let respData = await ItemCodeModel.findOne();
  respData = JSON.parse(JSON.stringify(respData));
  let { itemCode } = respData;
  if (Number(itemCode) + 1 < 10) {
    itemCode = `00${Number(itemCode) + 1}`;
  } else if (Number(itemCode) + 1 < 99) {
    itemCode = `0${Number(itemCode) + 1}`;
  } else {
    itemCode = itemCode + 1;
  }
  await ItemCodeModel.updateOne({ itemCode });
  return res.json(itemCode);
});
module.exports = router;
