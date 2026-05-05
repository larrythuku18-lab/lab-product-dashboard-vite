import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
const initialProducts = [
  { id: 1, name: "Laptop",  price: "ksh.20,000", inStock: true  },
  { id: 2, name: "Phone",   price: "ksh.15,000", inStock: false },
  { id: 3, name: "Tablet",  price: "ksh.10,000", inStock: true  },
];
const [products, setProducts] = useState(initialProducts);
const [filter, setFilter] = useState("all");

  // TODO: Implement state to manage filtering
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  // TODO: Implement logic to filter products based on availability
  React.useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.inStock === (filter === "inStock")));
    }
  }, [filter, products]);

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <div>
        <button onClick={() => setFilter("all")}>All Products</button>
        <button onClick={() => setFilter("inStock")}>In Stock</button>
        <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>
      </div>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
