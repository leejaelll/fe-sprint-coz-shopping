import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://cozshopping.codestates-seb.link/api/v1/products?count=4';

export default function useFetchProductListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(URL);
      const data = await response.data;
      setProducts(data);
    })();
  }, []);

  return products;
}
