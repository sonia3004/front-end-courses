import React from 'react';
import './OverlayBasketProducts.css';

interface OverlayBasketProductsProps {
  cartItems: { productName: string; quantity: number; price: number; thumbnail: string }[];
  onRemoveItem: (productName: string) => void;
  handleClose: () => void;
}

const OverlayBasketProducts: React.FC<OverlayBasketProductsProps> = ({ cartItems, onRemoveItem, handleClose }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-header">
          <h2>Your Shopping Cart</h2>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.thumbnail} alt={item.productName} className="cart-item-thumbnail" />
              <span>{item.productName}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: {item.price} €</span>
              <button onClick={() => onRemoveItem(item.productName)}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="total-price">Total: {totalPrice} €</p>
      </div>
    </div>
  );
};

export default OverlayBasketProducts;
