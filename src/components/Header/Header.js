import React, { useState } from 'react';
import './Header.css'

const Header = () => {
  const [tshirt, setTshirt] = useState({
    name: '',
    description: '',
    price: '',
    quantityL: '',
    quantityM: '',
    quantityS: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTshirt((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item Added:', tshirt);
  };

  return (
    <header>
      <h1>Add T-shirt</h1>
      <form className="tshirt-form" onSubmit={handleSubmit}>
        <label>
          T-shirt Name:
          <input
            type="text"
            name="name"
            value={tshirt.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={tshirt.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={tshirt.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity (L):
          <input
            type="number"
            name="quantityL"
            value={tshirt.quantityL}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity (M):
          <input
            type="number"
            name="quantityM"
            value={tshirt.quantityM}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity (S):
          <input
            type="number"
            name="quantityS"
            value={tshirt.quantityS}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </header>
  );
};

export default Header;
