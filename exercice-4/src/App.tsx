import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import OverlayBasketProducts from './components/OverlayBasketProducts';

const products = [
  { productName: 'Topaze Food', description: 'Best food for your pet', price: 20, weight: '5kg' },
  { productName: 'Topaze Treats', description: 'Delicious treats', price: 10, weight: '2kg' },
];

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ productName: string; quantity: number; price: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const handleAddToCart = (productName: string, quantity: number, price: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productName === productName);
      if (existingItem) {
        return prevItems.map((item) =>
          item.productName === productName ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { productName, quantity, price }];
      }
    });
  };

  const handleRemoveItem = (productName: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productName !== productName));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); 
  };

  return (
    <div className="app">
      <Navbar cartItemCount={cartItems.reduce((count, item) => count + item.quantity, 0)} onCartClick={toggleCart} />

      {products.map((product) => (
        <ProductCard
          key={product.productName}
          productName={product.productName}
          productDescription={product.description}
          priceOptions={[{ weight: product.weight, price: product.price }]}
          ingredients={['Chicken', 'Rice']}
          brand="Topaze"
          stock={true}
          onAddToCart={handleAddToCart}
        />
      ))}

      {isCartOpen && (
        <OverlayBasketProducts
          cartItems={cartItems}
          onClose={toggleCart} 
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};

export default App;
