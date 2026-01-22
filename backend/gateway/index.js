const express = require ("express"); 
const axios = require("axios"); 
const cors = require("cors"); 


const app = express() ; 
app.use(express.json()); 
app.use(cors()); 


app.use("/products", async (req,res)=> {
    const response= await axios ({
        method:req.method, 
        url :"http://localhost:4002/products", 
        data:req.body
    }); 
    res.json(response.data); 
}); 
app.use("/users", async (req,res)=> {
    const response= await axios ({
        method:req.method, 
        url :"http://localhost:4001/users", 
        data:req.body
    }); 
    res.json(response.data); 
}); 

app.use("/orders", async (req,res)=> {
    const response= await axios ({
        method:req.method, 
        url :"http://localhost:4003/orders", 
        data:req.body
    }); 
    res.json(response.data); 
}); 

app.listen(4000,()=> {
    console.log("gateway is running on port 4000")
})


// const express = require ("express"); 
// const cors = require("cors"); 
// const {createProxyMiddleware} = require("http-proxy-middleware"); 



// const app = express(); 
// app.use(cors()); 
// app.use(express.json()); 


// app.use (
//     "/users", 
//     createProxyMiddleware({
//         target:"http://localhost:4001", 
//         changeOrigin:true
//     })
// ); 
// app.use (
//     "/products", 
//     createProxyMiddleware({
//         target:"http://localhost:4002", 
//         changeOrigin:true
//     })
// ); 

// app.use (
//     "/orders", 
//     createProxyMiddleware({
//         target:"http://localhost:4003", 
//         changeOrigin:true
//     })
// ); 

// app.listen(4000,()=> {
//     console.log("gateware proxy running on port 4000")
// }); 
