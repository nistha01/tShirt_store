import React, { useState } from "react";
import './Header.css';
import Cart from "../Cart/Cart";
import Backdrop from "../UI/Backdrop";

const Header = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantityL, setQuantityL] = useState('');
  const [quantityM, setQuantityM] = useState('');
  const [quantityS, setQuantityS] = useState('');
  const [showBackdrop, setShowBackdrop] = useState(false);


  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    setShowBackdrop(true); // Show backdrop when the cart is shown
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    setShowBackdrop(false); // Hide backdrop when the cart is closed
  };

  const tshirtObj = () => ({
    name: name,
    description: description,
    price: price,
    quantityL: quantityL,
    quantityM: quantityM,
    quantityS: quantityS,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTshirtTotal(tshirtObj());

    // Clear the form
    setName("");
    setDescription("");
    setPrice("");
    setQuantityL("");
    setQuantityM("");
    setQuantityS("");
  };

  return (
    <>
      <h1>Add T-shirt</h1>
      <form className="tshirt-form" onSubmit={handleSubmit}>
        <label>
          T-shirt Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Quantity (L):
          <input type="number" name="quantityL" value={quantityL} onChange={(e) => setQuantityL(e.target.value)} />
        </label>
        <label>
          Quantity (M):
          <input type="number" name="quantityM" value={quantityM} onChange={(e) => setQuantityM(e.target.value)} />
        </label>
        <label>
          Quantity (S):
          <input type="number" name="quantityS" value={quantityS} onChange={(e) => setQuantityS(e.target.value)} />
        </label>
        <button type="submit">Add Item</button>
      </form>

      {cartIsShown && (
        <Cart 
          total={props.total}
          cartObjectTshirt={props.cartTshirt} 
          onClose={hideCartHandler} 
          onClear={props.onClearCart}
        />
      )}

      {showBackdrop && (
        <Backdrop show={showBackdrop} onCloseBackDrop={hideCartHandler} onClose={hideCartHandler}/>
      )}

      <button onClick={showCartHandler}>Cart</button>
    </>
  );
};

export default Header;
