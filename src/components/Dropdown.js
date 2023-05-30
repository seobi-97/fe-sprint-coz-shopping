import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import productIcon from "../images/product.svg";
import bookmarkIcon from "../images/bookmark.svg";
import polygon from "../images/polygon.svg";

const Container = styled.div`
  display: flex;
  position: relative;
  top: -5px;
  flex-direction: column;
  float: right;
  width: 200px;
  height: 152px;
  background: white;
  border-radius: 12px;
  z-index: 1;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 33%;
  a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 300;
  }
`;
const Icon2 = styled.img`
  display: flex;
  position: relative;
  top: -16px;
  right: 100px;
  float: right;
  width: 20px;
  height: 20px;
  z-index: 1;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`;
const Icon = styled.img`
  margin-right: 6px;
`;
function Dropdown({ primary, label, ...reset }) {
  return (
    <>
      <Icon2 src={polygon} />
      <Container>
        <Menu style={{ borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>
          <Link to="/">OOO님, 안녕하세요!</Link>
        </Menu>

        <Menu style={{ borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>
          <Link to="/product">
            <Icon src={productIcon} />
            상품리스트 페이지
          </Link>
        </Menu>

        <Menu>
          <Link to="/bookmark">
            <Icon src={bookmarkIcon} />
            북마크 페이지
          </Link>
        </Menu>
      </Container>
    </>
  );
}

export default Dropdown;
