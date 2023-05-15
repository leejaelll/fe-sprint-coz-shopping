import axios from 'axios';

import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { GridContainer } from '../styles/GridStyle';

import ProductCard from '../components/ProductCard';

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

const BookmarkList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainPage() {
  const [productList, setProductList] = useState([]);
  const [bookmarkItem, setBookmarkItem] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'http://cozshopping.codestates-seb.link/api/v1/products?count=4'
        );
        const data = response.data;
        setProductList(data);

        const bookmarkData = JSON.parse(localStorage.getItem('bookmarkedItem'));
        if (bookmarkData === null) {
          localStorage.setItem('bookmarkedItem', JSON.stringify([]));
        }
        setBookmarkItem(bookmarkData);
      } catch {
        console.log('Error');
      }
    })();
  }, []);

  const handleClickAddBookmark = (product) => {
    // localStorage가 없으면 localStorage부터 만들기
    if (localStorage.getItem('bookmarkedItem') === null) {
      localStorage.setItem('bookmarkedItem', JSON.stringify([product]));
    } else {
      // localStorage가 있으면 localStorage에 해당 리스트 정보를 집어넣기
      const prevItem = JSON.parse(localStorage.getItem('bookmarkedItem'));
      localStorage.setItem(
        'bookmarkedItem',
        JSON.stringify([...prevItem, product])
      );
    }
  };

  const handleClickRemoveBookmark = (product) => {
    // remove는 무조건 배열이 있을 것
    const Item = JSON.parse(localStorage.getItem('bookmarkedItem'));
  };

  const bookmarkedItemArray = bookmarkItem.map((item) => item.id);

  return (
    <div>
      <ProductList>
        <Title>상품 리스트</Title>
        <GridContainer>
          {productList.map((list) => {
            const isBooked = bookmarkedItemArray.includes(list.id);
            return (
              <ProductCard
                key={list.id}
                list={list}
                bookmark={isBooked}
                handleClickAddBookmark={handleClickAddBookmark}
              />
            );
          })}
        </GridContainer>
      </ProductList>
      <BookmarkList></BookmarkList>
    </div>
  );
}
