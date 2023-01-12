const express = require("express");
const app = express();
const productSchema = require("./model/product");
require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));
app.get("/api/get", (req, res) => {
  try{
    productSchema
    .find({})
    .lean()
    .then((data) => {
      res.send(data);
    });
  }catch(e){
    console.log(e)
  }
});

app.listen(80, () => {
  console.log("程序正運行在端口80上");
});
