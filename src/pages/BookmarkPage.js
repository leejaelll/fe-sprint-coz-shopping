import { GridContainer } from '../styles/GridStyle';

import { useState } from 'react';

import ProductListCategory from '../components/ProductListCategory';
import ProductCard from '../components/ProductCard';

import useFetchAllProducts from '../hooks/useFetchAllProducts';

import selectTypes from '../utils/selectTypes';
import checkBookmarkedItem from '../utils/checkBookmarkedItem';
import useFetchBookmarkProducts from '../hooks/useFetchBookmarkProducts';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 76px;
`;

export default function BookmarkPage() {
  const products = useFetchAllProducts();
  const bookmarkProducts = useFetchBookmarkProducts();
  const productTypes = selectTypes(products);

  const [type, setType] = useState('Total');
  const handleClickChangeType = (type) => {
    setType(type);
  };

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
          return <ProductCard key={list.id} list={list} bookmark={isBooked} />;
        })}
      </GridContainer>
    </Container>
  );
}
