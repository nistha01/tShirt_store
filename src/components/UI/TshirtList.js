import React, { useState } from 'react';
import './TshirtList.css'; // Import external CSS

const TshirtList = () => {
  // Sample data for T-shirts
  const [tshirts, setTshirts] = useState([
    { name: 'Cool Tee', description: 'Cool summer wear', price: '$25', quantityL: 10, quantityM: 12, quantityS: 8 },
    { name: 'Retro Tee', description: 'Retro style', price: '$30', quantityL: 5, quantityM: 8, quantityS: 10 },
    { name: 'Sport Tee', description: 'Perfect for workouts', price: '$20', quantityL: 20, quantityM: 15, quantityS: 5 },
    // Add more T-shirts as needed
  ]);

  // Handle the "Buy" button click
  const handleBuy = (size, tshirtName) => {
    console.log(`Buying size ${size} of ${tshirtName}`);
    // Add logic for buying the T-shirt
  };

  // Handle the "Delete" button click
  const handleDelete = (index) => {
    const updatedTshirts = tshirts.filter((_, i) => i !== index);
    setTshirts(updatedTshirts);
  };

  return (
    <div className="tshirt-list">
      {tshirts.map((tshirt, index) => (
        <div className="tshirt-item" key={index}>
          <div className="tshirt-info">
            <h3>{tshirt.name}</h3>
            <p>{tshirt.description}</p>
            <p>Price: {tshirt.price}</p>
          </div>
          <div className="tshirt-actions">
            <div className="size-box">
              <p>Quantity (L): {tshirt.quantityL}</p>
              <button onClick={() => handleBuy('L', tshirt.name)}>Buy L</button>
            </div>
            <div className="size-box">
              <p>Quantity (M): {tshirt.quantityM}</p>
              <button onClick={() => handleBuy('M', tshirt.name)}>Buy M</button>
            </div>
            <div className="size-box">
              <p>Quantity (S): {tshirt.quantityS}</p>
              <button onClick={() => handleBuy('S', tshirt.name)}>Buy S</button>
            </div>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TshirtList;
