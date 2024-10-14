import React from 'react';
import ProductCard from './components/ProductCard'; 
const App: React.FC = () => {
  return (
    <div>
      <ProductCard
        productName="Topaze's Food"
        productDescription="The best choice for your pet! 2 formats option"
        priceOptions={[
          { weight: "5 kg", price: 20 },
          { weight: "15 kg", price: 45 }
        ]}
        ingredients={["Organic chicken", "rice", "vegetables"]}
        brand="Topaze"
        stock={true}
      />
    </div>
  );
};

export default App;


