import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Dropdown = styled.ul`
  position: absolute;
  background: red;
  border-radius: 0.75em;
  width: 12.5rem;
  top: 60px;
  right: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 70%;
    width: 0;
    height: 0;
    border: 18px solid transparent;
    border-bottom-color: red;
    border-top: 0;
    margin-left: -24px;
    margin-top: -17px;
  }
`;

const DropdownList = styled.li`
  padding: 13px 0;
`;

export default function MenuBar() {
  return (
    <Dropdown>
      <DropdownList>이재린님, 안녕하세요!</DropdownList>
      <DropdownList>
        <Link to="/product/list">상품리스트 페이지</Link>
      </DropdownList>
      <DropdownList>
        <Link to="/bookmark">북마크 페이지</Link>
      </DropdownList>
    </Dropdown>
  );
}
