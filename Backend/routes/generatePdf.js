var easyinvoice = require("easyinvoice");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const OrderDetailsModel = require("../models/orderDetails");
// const OrderIdModel = require("../models/orderId");

router.route("/invoice/:orderNo/").get(async (req, res) => {
  try {
    let no = Math.floor(Math.random() * 1000000000);
    let day = Date();

    let orderList = await OrderDetailsModel.find({
      orderId: req.params.orderNo,
    });

    let prod = [];
    orderList.map((item) => {
      prod.push({
        quantity: item.qty,
        description: item.itemName,
        "tax-rate": 5,
        price: item.itemPrice,
      });
    });
    var data = {
      customize: {
        //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
      },
      images: {
        // The logo on top of your invoice
        logo: "https://t4.ftcdn.net/jpg/03/50/73/13/240_F_350731301_SljOrT1KCi0KCp7e2OwLM5vpBumWBOWU.jpg",
        // The invoice background
        background: "",
      },
      // Your own data
      sender: {
        company: "SVS WEARHOUSE PRIVATE -LIMITED",
        address: "1ST STREET",
        zip: "641020",
        city: "CHENNAI",
        country: "INDIA",
      },
      // Your recipient
      client: {
        company: "Client Company ",
        address: "Clientstreet 456",
        zip: "4567 CD",
        city: "Clientcity",
        country: "Clientcountry",
      },
      information: {
        // Invoice number
        number: no,
        // Invoice data
        date: day,
        // Invoice due date
        "due-date": "",
      },
      // The products you would like to see on your invoice
      // Total values are being calculated automatically

      products: prod,
      // The message you would like to display on the bottom of your invoice
      "bottom-notice": "Kindly pay your invoice within 15 days.",
      // Settings to customize your invoice
      settings: {
        currency: "INR",
      },
      // Translate your invoice to your preferred language
      translate: {},
    };

    //Create your invoice! Easy!
    res.send(JSON.stringify(data));
    // const result = await easyinvoice.createInvoice(data);
    // res.send(result);
    // fs.writeFileSync("invoice.pdf", result.pdf, "base64");

    // var filePath = path.join(__dirname, "..", "invoice.pdf");

    // var stat = fs.statSync(filePath);

    // res.writeHead(200, {
    //   "Content-Type": "application/pdf",
    //   "Content-Length": stat.size,
    // });

    // var readStream = fs.createReadStream(filePath);
    // // We replaced all the event handlers with a simple call to readStream.pipe()
    // readStream.pipe(res);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
