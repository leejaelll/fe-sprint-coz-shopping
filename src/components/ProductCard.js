import styled from 'styled-components';
import { GridItem } from '../styles/GridStyle';

import { useState } from 'react';

import bookmarkOff from '../assets/bookmarkOff.svg';
import bookmarkOn from '../assets/bookmarkOn.svg';

import addBookmarkProducts from '../utils/addBookmarkProducts';
import removeBookmarkProducts from '../utils/removeBookmarkProducts';

const CardImg = styled.div`
  width: 100%;
  height: 210px;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const BookmarkStar = styled.button`
  border: none;
  position: absolute;
  left: 86.36%;
  right: 4.55%;
  top: 82.86%;
  bottom: 5.71%;
  cursor: pointer;
`;

const CardDescription = styled.div`
  margin-top: 0.375rem;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  h2 {
    font-weight: 800;
    margin-bottom: 0.25rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  div {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
`;

export default function ProductCard({ list, bookmark }) {
  const {
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  } = list;

  const [isBooked, setIsBooked] = useState(bookmark);

  const handleClick = (list) => {
    setIsBooked((isBooked) => !isBooked);
    isBooked ? removeBookmarkProducts(list) : addBookmarkProducts(list);
  };

  return (
    <GridItem>
      <CardImg>
        <img src={image_url || brand_image_url} />
        <BookmarkStar onClick={() => handleClick(list)}>
          {isBooked ? <img src={bookmarkOn} /> : <img src={bookmarkOff} />}
        </BookmarkStar>
      </CardImg>
      <CardDescription>
        <LeftSection>
          {(type === 'Category' && <h2># {title}</h2>) || (
            <h2>{title || brand_name}</h2>
          )}

          {sub_title && <h3>{sub_title}</h3>}
        </LeftSection>
        <RightSection>
          {(type === 'Product' && <div>{discountPercentage}%</div>) ||
            (type === 'Brand' && <div>관심고객수</div>)}
          {(type === 'Product' && (
            <span>{Number(price).toLocaleString()}</span>
          )) ||
            (type === 'Brand' && (
              <span>{Number(follower).toLocaleString()}</span>
            ))}
        </RightSection>
      </CardDescription>
    </GridItem>
  );
}
