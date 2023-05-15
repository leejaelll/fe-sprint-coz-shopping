import styled from 'styled-components';
import { GridItem } from '../styles/GridStyle';

import { useState } from 'react';

import bookmarkOff from '../assets/bookmarkOff.svg';
import bookmarkOn from '../assets/bookmarkOn.svg';

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

  strong {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
`;

export default function ProductCard({
  list,
  bookmark,
  handleClickAddBookmark,
}) {
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

  const handleClick = () => {
    setIsBooked((isBooked) => !isBooked);
    !bookmark && handleClickAddBookmark(list);
  };

  return (
    <GridItem>
      <CardImg>
        <img src={image_url || brand_image_url} />
        <BookmarkStar onClick={handleClick}>
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
          {(type === 'Product' && <strong>{discountPercentage}%</strong>) ||
            (type === 'Brand' && <strong>관심고객수</strong>)}
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
