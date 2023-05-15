import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bookmark from '../assets/bookmark.svg';
import gift from '../assets/gift.svg';

const Dropdown = styled.ul`
  position: absolute;
  background-color: #ffffff;
  border-radius: 0.75em;
  width: 12.5rem;
  top: 85px;
  right: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

  & li:last-child {
    border: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 70%;
    width: 0;
    height: 0;
    border: 18px solid transparent;
    border-bottom-color: #ffffff;
    border-top: 0;
    margin-left: -24px;
    margin-top: -17px;
  }
`;

const DropdownList = styled.li`
  padding: 13px 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;

  a {
    color: #000000;
  }
`;

const DropdownListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default function MenuBar() {
  return (
    <Dropdown>
      <DropdownList>이재린님, 안녕하세요!</DropdownList>
      <DropdownList>
        <Link to="/product/list">
          <DropdownListItem>
            <img src={gift} />
            상품리스트 페이지
          </DropdownListItem>
        </Link>
      </DropdownList>
      <DropdownList>
        <Link to="/bookmark">
          <DropdownListItem>
            <img src={bookmark} />
            북마크 페이지
          </DropdownListItem>
        </Link>
      </DropdownList>
    </Dropdown>
  );
}
