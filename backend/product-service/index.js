const express = require("express"); 
const mongoose = require("mongoose"); 

const app = express();
app.use(express.json());

// database  connection
mongoose.connect("mongodb://admin:admin123@localhost:27017/productdb-service?authSource=admin");

const Product = mongoose.model("Product", {
  name: String,
  price: Number,
});

// Create a product
app.post("/products", async (req, res) => {
  const product = new Product({ name: req.body.name, price: req.body.price });
  await product.save();
  res.json({ message: "Product created" });
});

// Get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(4001, () => console.log("Product service on 4001"));