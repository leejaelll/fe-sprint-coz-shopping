import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import MenuBar from './MenuBar';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 55px;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 0.75rem;
`;

const Hamburger = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export default function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <FlexWrapper>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo src="/images/logo.png" alt="logo" />
        <Title>COZ Shopping</Title>
      </Link>
      <Hamburger src="/images/hamburger.svg" onClick={toggleDropdown} />
      {isDropdown && <MenuBar />}
    </FlexWrapper>
  );
}
