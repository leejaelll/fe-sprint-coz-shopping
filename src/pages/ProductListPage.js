import styled from 'styled-components';
import { GridContainer } from '../styles/GridStyle';

import { useState, useCallback, useEffect } from 'react';

import ProductListCategory from '../components/ProductListCategory';
import ProductCard from '../components/ProductCard';

import useFetchAllProducts from '../hooks/useFetchAllProducts';
import useFetchBookmarkProducts from '../hooks/useFetchBookmarkProducts';

import selectTypes from '../utils/selectTypes';
import checkBookmarkedItem from '../utils/checkBookmarkedItem';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNotify, removeNotify } from '../utils/toastNotify';

export default function ProductListPage() {
  const { products, result, setResult } = useFetchAllProducts();
  const [itemIndex, setItemIndex] = useState(0);

  const bookmarkProducts = useFetchBookmarkProducts();
  const productTypes = selectTypes(products);

  const [type, setType] = useState('Total');
  const handleClickChangeType = (type) => {
    setType(type);
  };

  const [toastMessage, setToastMessage] = useState({ id: 0, message: '' });

  const _infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (Math.ceil(scrollTop + clientHeight) === scrollHeight) {
      setItemIndex(itemIndex + 20);
      setResult(result.concat(products.slice(itemIndex + 20, itemIndex + 40))); // 20, 40
    }
  }, [itemIndex, result]);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  const filteredProducts =
    type === 'Total'
      ? result
      : products.filter((product) => product.type === type);

  return (
    <Container>
      <ProductListCategory
        activeType={type}
        productTypes={productTypes}
        handleClickChangeType={handleClickChangeType}
      />
      <GridContainer>
        {filteredProducts.map((list) => {
          const isBooked = checkBookmarkedItem(bookmarkProducts, list);
          return (
            <ProductCard
              key={list.id}
              list={list}
              bookmark={isBooked}
              setToastMessage={setToastMessage}
              addNotify={addNotify}
              removeNotify={removeNotify}
            />
          );
        })}
      </GridContainer>
      {toastMessage.message && (
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 76px;
`;
