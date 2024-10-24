import React from 'react';
import './TshirtList.css'; // Import external CSS

const TshirtList = (props) => {
  const tshirtobj1 = (size, tshirtName, price,desc) => {
      return {
        name: tshirtName,
        price: price,
        size: size,
        description:desc
      };
    };

  const handleBuy = (size, tshirtName, price,desc) => {
    

    props.onAddToCart(price);
    props.onAddTshirtToCart(tshirtobj1(size, tshirtName, price,desc));  // Pass arguments to tshirtobj
  };

  const handleDelete = (index) => {
    props.onDelete(index);
  };

  return (
    <div className="tshirt-list">
      {props.tshirts.map((tshirt, index) => (
        <div className="tshirt-item" key={index}>
          <div className="tshirt-info">
            <h3>{tshirt.name}</h3>
            <p>Description: {tshirt.description}</p>
            <p>Price: {tshirt.price}</p>
          </div>
          <div className="tshirt-actions">
            <div className="size-box">
              <p>Quantity (L): {tshirt.quantityL}</p>
              <button onClick={() => handleBuy('L', tshirt.name, tshirt.price,tshirt.description)}>Buy L</button>
            </div>
            <div className="size-box">
              <p>Quantity (M): {tshirt.quantityM}</p>
              <button onClick={() => handleBuy('M', tshirt.name, tshirt.price,tshirt.description)}>Buy M</button>
            </div>
            <div className="size-box">
              <p>Quantity (S): {tshirt.quantityS}</p>
              <button onClick={() => handleBuy('S', tshirt.name, tshirt.price,tshirt.description)}>Buy S</button>
            </div>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TshirtList;
