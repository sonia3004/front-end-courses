import React, { useState } from "react";
import "./ProductCard.css";

interface ProductCardProps {
  productName: string;
  productDescription: string;
  priceOptions: { weight: string; price: number }[];
  ingredients: string[];
  brand: string;
  stock: boolean;
  thumbnail: string;
  onAddToCart: (productName: string, quantity: number, price: number, thumbnail: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productDescription,
  priceOptions,
  ingredients,
  brand,
  stock,
  thumbnail,
  onAddToCart,
}) => {
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0].price);
  const [quantity, setQuantity] = useState(1);

  const handlePriceChange = (price: number) => {
    setSelectedPrice(price);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  const totalPrice = selectedPrice * quantity;

  return (
    <div className="product-card">
      <figure className="product-image-container">
        <img src={thumbnail} alt={productName} className="product-thumbnail" />
      </figure>

      <aside className="product-details">
        <header className="product-header">
          <h2 className="product-title">{productName}</h2>
        </header>
        <section className="product-description-section">
          <p className="product-description">{productDescription}</p>
          <div className="product-format">
            {priceOptions.map((option, index) => (
              <button
                key={index}
                className={`format-button ${selectedPrice === option.price ? "selected" : ""}`}
                onClick={() => handlePriceChange(option.price)}
              >
                {option.weight}
              </button>
            ))}
            <p className="product-price">Price: {totalPrice} €</p>
          </div>
        </section>

        <aside className="product-aside">
          <ul>
            <li>Ingredients: {ingredients.join(", ")}</li>
            <li>Brand: {brand}</li>
            <li className="stock-status">{stock ? "In stock" : "Out of stock"}</li>
          </ul>
        </aside>

        <footer className="product-footer">
          <label htmlFor="quantity" className="quantity-label">Quantity:</label>
          <select
            id="quantity"
            name="quantity"
            className="quantity-select"
            onChange={handleQuantityChange}
            value={quantity}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            className="add-to-cart"
            onClick={() => onAddToCart(productName, quantity, totalPrice, thumbnail)}
          >
            Add to cart
          </button>
        </footer>
      </aside>
    </div>
  );
};

export default ProductCard;
