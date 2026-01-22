const express = require("express");
const mongoose = require("mongoose"); 
const axios = require("axios"); 
const app = express(); 
app.use(express.json()); 


mongoose.connect("mongodb://admin:admin123@localhost:27017/orderdb-service?authSource=admin"); 

const Order = mongoose.model("Order", { 
    userId: String, 
    productID:String, 
    price:Number,  
}); 

// create an order 

app.post("/orders", async (req, res) => {
    //get product price from product service 
    const product = await axios.get(`http://localhost:4002/products`);; 

    const selected = product.data.find((p)=> p._id===req.body.productID);

    const order = new Order ({
        userId: req.body.userId, 
        productID: req.body.productID,  
        price:selected.price
    }); 
    await order.save(); 
    res.json({ message: "Order created" }); 
}); 

app.listen(4003, () => console.log("Order service on 4003")); 

