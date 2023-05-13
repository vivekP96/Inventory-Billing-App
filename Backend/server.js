const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Connection = require("./db");
const port = process.env.PORT || 8080;
const addStockRoute = require("./routes/addStock");
const deleteStock = require("./routes/deleteStock");
const updateStock = require("./routes/updateStock");
const getStock = require("./routes/getStock");
const getStockById = require("./routes/getStockById");
const getItemCode = require("./routes/getItemCode");
const createOrderRoutes = require("./routes/createOrder");
const getOrderRoutes = require("./routes/getOrderDetails");
const getOrderId = require("./routes/getOrderId");
const getOrderedItems = require("./routes/getOrderedItems");
const registerUser = require("./routes/registerUser");
const loginRoute = require("./routes/auth");
const getinvoice = require("./routes/generatePdf");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//mongoDb Connection
Connection();
//routes for add stock
app.use("/api", addStockRoute);
//routes for delete stock
app.use("/api", deleteStock);
//routes for update stock
app.use("/api", updateStock);
//routes for get all stocks
app.use("/api", getStock);
//routes for get all stocks
app.use("/api", getStockById);
//routes for get itemCode
app.use("/api", getItemCode);
//routes for creating order
app.use("/api", createOrderRoutes);
//routes for getorders
app.use("/api", getOrderRoutes);
//routes for get orderId
app.use("/api", getOrderId);

//routes for ordered items
app.use("/api", getOrderedItems);
//routes for user register
app.use("/api", registerUser);
//routes for login authentication
app.use("/api", loginRoute);
// routes for invoice generating
app.use("/api", getinvoice);
//routes for Home page
app.get("/", (req, res) => {
  try {
    res.send("Homepage");
  } catch (error) {
    console.log("Error:" + error);
  }
});

//server Connection
app.listen(port, () => {
  console.log(`Server Litening to Port ${port}`);
});
