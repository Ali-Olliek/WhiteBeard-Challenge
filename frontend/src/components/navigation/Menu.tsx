import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ClickableText from '../common/ClickableText';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
`;

const MenuIcon = styled.div`
  display: block; /* Hide by default */
  cursor: pointer;
  @media (max-width: 768px) {
    display: block; /* Show on smaller screens */
  }
`;

const MenuLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide by default on smaller screens */
  }
`;

const MenuItem = styled.li`
  margin: 0 10px;
`;

//TODO Check to delete
const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <MenuIcon onClick={toggleMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='white'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
        </svg>
      </MenuIcon>
      <MenuLinks style={{ display: showMenu ? 'flex' : 'none' }}>
        <MenuItem>
          <ClickableText text='About us' cb={() => null} tag='p' />
        </MenuItem>
        <MenuItem>
          <ClickableText text='About us' cb={() => null} tag='p' />
        </MenuItem>
      </MenuLinks>
    </Nav>
  );
};

export default Menu;
