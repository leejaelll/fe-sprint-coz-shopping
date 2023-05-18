import { useState } from 'react';

import styled from 'styled-components';
import { GridContainer } from '../styles/GridStyle';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNotify, removeNotify } from '../utils/toastNotify';

import ProductListCategory from '../components/ProductListCategory';
import ProductCard from '../components/ProductCard';

import useFetchAllProducts from '../hooks/useFetchAllProducts';
import useFetchBookmarkProducts from '../hooks/useFetchBookmarkProducts';

import selectTypes from '../utils/selectTypes';
import checkBookmarkedItem from '../utils/checkBookmarkedItem';

export default function BookmarkPage() {
  const { products } = useFetchAllProducts();
  const bookmarkProducts = useFetchBookmarkProducts();
  const productTypes = selectTypes(products);

  const [type, setType] = useState('Total');
  const handleClickChangeType = (type) => {
    setType(type);
  };

  const [toastMessage, setToastMessage] = useState({ id: 0, message: '' });

  const filteredProducts =
    type === 'Total'
      ? bookmarkProducts
      : bookmarkProducts.filter((product) => product.type === type);

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
