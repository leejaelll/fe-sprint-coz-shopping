import styled from 'styled-components';
import { GridContainer } from '../styles/GridStyle';

import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNotify, removeNotify } from '../utils/toastNotify';

import ProductCard from '../components/ProductCard';

import useFetchProductListProducts from '../hooks/useFetchProductListProducts';
import useFetchBookmarkProducts from '../hooks/useFetchBookmarkProducts';

import checkBookmarkedItem from '../utils/checkBookmarkedItem';

export default function MainPage() {
  const products = useFetchProductListProducts();
  const bookmarkProducts = useFetchBookmarkProducts();
  const [toastMessage, setToastMessage] = useState({ id: 0, message: '' });

  return (
    <div>
      <ProductList>
        <Title>상품 리스트</Title>
        <GridContainer>
          {products.map((list) => {
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
      </ProductList>
      <BookmarkList>
        <Title>북마크 리스트</Title>
        <GridContainer>
          {bookmarkProducts.length === 0 ? (
            <GridItemCol12>북마크 리스트가 비어있습니다.🦁</GridItemCol12>
          ) : (
            bookmarkProducts.slice(0, 4).map((list) => {
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
            })
          )}
        </GridContainer>
      </BookmarkList>

      {toastMessage.message && (
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
        />
      )}
    </div>
  );
}

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 76px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const BookmarkList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 76px;
`;

const GridItemCol12 = styled.div`
  margin-top: 1rem;
  grid-column: span 12;
`;
