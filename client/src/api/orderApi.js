import axios from "axios"; 

const API = axios.create ({
    baseURL : "http://localhost:4002", 
    headers : {
        "content-type":"application/json", 
    }
})

export const createOrder = (orderData)=> {
    API.post("/orders",orderData); 
}