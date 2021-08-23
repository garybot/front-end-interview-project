import styled from "styled-components";
import { useState } from 'react';

const HeaderStyle = styled.header`
  background: black;
  height: 56px;
  padding: 0 2%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  nav {
    width: 20%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    a {
      margin: 0 2%;
      color: white;
      text-decoration: none;
      font-weight: light;
    }
    @media (max-width: 468px) {
      display: none;
      width: 50%;
    }
  }
  h1 {
    font-size: 1.4rem
  }
  .hide {
    display: none;
  }
  .show {
    display: inline-block;
  }
  .menuIcon {
    display: none;
    @media (max-width: 468px) {
      display: inline-block;
    }
  }
`;

const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const handleClick = (e) => {
    setHideMenu(!hideMenu);
  }

  return (
    <HeaderStyle>
      <img src="images/menu.png" onClick={handleClick} className="menuIcon"/>
      <nav className={hideMenu ? null : "show" }>
        <a href="#">Stores</a>
        <a href="#">Contact Us</a>
      </nav>
      <h1 className={hideMenu ? null : "hide"}>FOXTROT</h1>
      <a href="#"><img src="images/basket.png"/></a>
    </HeaderStyle>
  )
}

export default Header;
