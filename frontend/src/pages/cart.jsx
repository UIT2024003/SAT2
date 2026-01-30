import React from "react";

const cart = ({ items }) => {
  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default cart;
