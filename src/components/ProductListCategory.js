import total from '../assets/total.png';
import exhibition from '../assets/exhibition.png';
import product from '../assets/product.png';
import category from '../assets/category.png';
import brand from '../assets/brand.png';

import styled from 'styled-components';

export default function ProductListCategory({
  activeType,
  productTypes,
  handleClickChangeType,
}) {
  return (
    <Container>
      {productTypes.map((type) => (
        <TypeWrapper
          key={type}
          onClick={() => handleClickChangeType(type)}
          className={type === activeType ? 'active' : ''}
        >
          <img
            src={
              (type === 'Total' && total) ||
              (type === 'Exhibition' && exhibition) ||
              (type === 'Product' && product) ||
              (type === 'Category' && category) ||
              (type === 'Brand' && brand)
            }
          />
          <span>
            {(type === 'Total' && '전체') ||
              (type === 'Exhibition' && '기획전') ||
              (type === 'Product' && '상품') ||
              (type === 'Category' && '카테고리') ||
              (type === 'Brand' && '브랜드')}
          </span>
        </TypeWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.25rem;
  margin: 1.5rem 0;
`;
const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 0.25rem;
  }
`;
