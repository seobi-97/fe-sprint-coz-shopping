import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import Hamburger from "../images/hamburger.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  padding-left: 100px;
  img {
    cursor: pointer;
  }
  p {
    margin: 0 0 0 10px;
    font-weight: 600;
    font-size: 27px;
    cursor: pointer;
  }
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  padding-right: 100px;
  cursor: pointer;
  p {
    float: right;
  }
  align-items: center;
`;

function Header({ handleClick }) {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <p>COZ Shopping</p>
        </Link>
      </LogoContainer>
      <Menu>
        <img onClick={handleClick} src={Hamburger} alt="hamburger" />
      </Menu>
    </Container>
  );
}

export default Header;
