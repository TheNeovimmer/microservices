<script> 
import axios from "axios"

let userId = ""; 
let productID="";
let message=""; 
let error =""; 


async function submitOrder () {
  message=""; 
  error ="";
  
  try {
    const res= await axios.post("http://localhost:4002/orders",{
      userId, 
      productID
    }); 
    message=" order is created thnx a lot ... "
    console.log(res.data);

  }catch(err){
    error ="failed to create order please try again ... "
    console.error(err)
  }


}

</script>

<main>
  <h1> Create order</h1>
  <input 
  placeholder="Add the user id"
  bind:value={userId}
  >

  <input 
  placeholder="Add the product id"
  bind:value={productID}
  >
  <button 
  on:click={submitOrder}
  >Create order</button>

  {#if message } 
    <p>{message}</p>
  {/if}
  {#if error } 
    <p>{error}</p>
  {/if}


</main>


<style>
main {
  max-width: 400px;
  margin: 50px auto;
  font-family: sans-serif;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 8px;
}
button{
  padding: 10px;
  width: 60%;
  cursor: pointer;
}


</style>