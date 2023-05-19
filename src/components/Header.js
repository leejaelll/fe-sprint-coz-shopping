import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import MenuBar from './MenuBar';

import HamburgerIcon from '../assets/hamburger.svg';

export default function Header() {
  const dropMenuRef = useRef(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  useEffect(() => {
    const handleOutsideClose = (e) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isDropdown && !dropMenuRef.current.contains(e.target))
        setIsDropdown(false);
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isDropdown]);

  return (
    <HeaderContainer>
      <Link to="/">
        <Home>
          <Logo src="/images/logo.png" alt="logo" />
          <Title>COZ Shopping</Title>
        </Home>
      </Link>
      <Hamburger
        src={HamburgerIcon}
        onClick={toggleDropdown}
        ref={dropMenuRef}
      />
      {isDropdown && <MenuBar />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  z-index: 999;
  display: flex;
  align-items: center;
  position: sticky;
  padding: 25px 76px;
  top: 0px;
  background-color: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const Home = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 55px;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  margin-left: 0.75rem;
`;

const Hamburger = styled.img`
  margin-left: auto;
  cursor: pointer;
`;
