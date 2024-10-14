import React from "react";

interface CartItem {
  productName: string;
  quantity: number;
  price: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  onRemoveItem: (productName: string) => void;
  onUpdateQuantity: (productName: string, newQuantity: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productName}>
              <div className="cart-item">
                <span>{item.productName}</span>
                <span>{item.price} €</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item.productName, Number(e.target.value))}
                />
                <button onClick={() => onRemoveItem(item.productName)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p>Total Price: {totalPrice.toFixed(2)} €</p>
    </div>
  );
};

export default ShoppingCart;
