import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css'; 

interface Product {
  productName: string;
  productDescription: string;
  priceOptions: { weight: string; price: number }[];
  ingredients: string[];
  brand: string;
  stock: boolean;
  thumbnail: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (productName: string, quantity: number, price: number, thumbnail: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.productName}
          productName={product.productName}
          productDescription={product.productDescription}
          priceOptions={product.priceOptions}
          ingredients={product.ingredients}
          brand={product.brand}
          stock={product.stock}
          thumbnail={product.thumbnail}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
