import React, { useState } from "react";
import Header from "./components/Header/Header";
import TshirtList from "./components/UI/TshirtList";


function App() {
  const [tshirts, setTshirts] = useState([]);
  const [total, setTotal] = useState(0); // Initialize total to 0
  const [cartTshirt,setTshirtCart]=useState([]);


  const addItemToCart = (price) => {
    setTotal((prevTotal) => prevTotal + parseFloat(price)); // Update total with item price
  };
  const clear =()=>{
    setTotal(0);
    setTshirtCart([]);
  }

  const addtshirtTotal = (tshirtTotal) => {
    setTshirts((prevTshirts) => [...prevTshirts, tshirtTotal]); // Append new T-shirt
  };

  const deleteTshirtHandler = (index) => {
    setTshirts((prevTshirts) => prevTshirts.filter((_, i) => i !== index));
  };
  const addTshirtToCartHandler=(tshirtCartObect)=>{
    setTshirtCart((prevTshirts) => [...prevTshirts, tshirtCartObect]);
  }

  return (
    <div>
      <Header total={total} 
      cartTshirt={cartTshirt} 
      onAddTshirtTotal={addtshirtTotal}  
      onClearCart={clear}/>
      <TshirtList tshirts={tshirts} 
      onDelete={deleteTshirtHandler} 
      onAddToCart={addItemToCart} 
      onAddTshirtToCart={addTshirtToCartHandler} />
    </div>
  );
}

export default App;
