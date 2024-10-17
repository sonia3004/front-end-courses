import React from 'react';
import './OverlayBasketProducts.css';

interface CartItem {
  productName: string;
  quantity: number;
  price: number;
}

interface OverlayBasketProductsProps {
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveItem: (productName: string) => void;
}

const OverlayBasketProducts: React.FC<OverlayBasketProductsProps> = ({ cartItems, onClose, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.productName}>
                {item.productName} - {item.quantity} x {item.price} €
                <button onClick={() => onRemoveItem(item.productName)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total Price: {totalPrice.toFixed(2)} €</p>
      </div>
    </div>
  );
};

export default OverlayBasketProducts;
