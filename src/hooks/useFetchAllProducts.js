import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://cozshopping.codestates-seb.link/api/v1/products';

export default function useFetchAllProducts() {
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(URL);
      const data = await response.data;
      setProducts(data);
      setResult(data.slice(0, 20));
    })();
  }, []);

  return { products, result, setResult };
}
