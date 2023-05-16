import { GridContainer } from '../styles/GridStyle';

import { useState } from 'react';

import ProductListCategory from '../components/ProductListCategory';

import useFetchAllProducts from '../hooks/useFetchAllProducts';

import selectTypes from '../utils/selectTypes';

export default function ProductListPage() {
  const products = useFetchAllProducts();
  const productTypes = selectTypes(products);

  const [type, setType] = useState('Total');

  const handleClickChangeType = (type) => {
    setType(type);
  };
  return (
    <div>
      <ProductListCategory
        activeType={type}
        productTypes={productTypes}
        handleClickChangeType={handleClickChangeType}
      />
      <GridContainer>
        {/* {products.map((list) => {
          const isBooked = checkBookmarkedItem(bookmarkProducts, list);
          return <ProductCard key={list.id} list={list} bookmark={isBooked} />;
        })} */}
      </GridContainer>
    </div>
  );
}
