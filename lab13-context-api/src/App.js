import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: 'Brown Rice Cookies',
      cost: 9.99
    },
    {
      id: 2,
      product_name: 'Chocolate Cookies',
      cost: 6.99
    },
    {
      id: 3,
      product_name: 'Oatmeal Cookies',
      cost: 3.99
    }
  ])

  const context = {
    products: () => {
      return products;
    }
  }

  return (
    <React.Fragment>
      {/* set value of productcontext to be context object that we just created */}
      <ProductContext.Provider value={context}>
        <h1>My Catalog</h1>
        <ProductListing />
      </ProductContext.Provider>
    </React.Fragment>
  );
}

export default App;
