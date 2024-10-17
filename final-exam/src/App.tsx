import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import OverlayBasketProducts from './components/OverlayBasketProducts';

const products = [
  {
    productName: 'Topaze Food',
    productDescription: 'Best food for your pet',
    priceOptions: [{ weight: '5kg', price: 20 }],
    ingredients: ['Chicken', 'Rice'],
    brand: 'Topaze',
    stock: true,
    thumbnail: '/images/petfood1.jpg'
  },
  {
    productName: 'Topaze Treats',
    productDescription: 'Delicious treats',
    priceOptions: [{ weight: '2kg', price: 10 }],
    ingredients: ['Chicken'],
    brand: 'Topaze',
    stock: true,
    thumbnail: '/images/petfood2.jpg'
  },
  {
    productName: 'Topaze Snacks',
    productDescription: 'Tasty snacks for your pet',
    priceOptions: [{ weight: '1kg', price: 8 }],
    ingredients: ['Beef', 'Carrots'],
    brand: 'Topaze',
    stock: true,
    thumbnail: '/images/petfood3.jpg'
  },
  {
    productName: 'Topaze Deluxe',
    productDescription: 'Premium deluxe food for pets',
    priceOptions: [{ weight: '10kg', price: 50 }],
    ingredients: ['Salmon', 'Potatoes'],
    brand: 'Topaze',
    stock: true,
    thumbnail: '/images/petfood4.jpeg'
  },
];

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ productName: string; quantity: number; price: number; thumbnail: string }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productName: string, quantity: number, price: number, thumbnail: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productName === productName);
      if (existingItem) {
        return prevItems.map((item) =>
          item.productName === productName ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { productName, quantity, price, thumbnail }];
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
      <Navbar cartItemCount={cartItems.length} onCartClick={toggleCart} />

      <ProductGrid products={products} onAddToCart={handleAddToCart} />

      {isCartOpen && (
        <OverlayBasketProducts
          cartItems={cartItems}
          handleClose={toggleCart}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};

export default App;
