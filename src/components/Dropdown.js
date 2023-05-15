import React from "react";
import styled from "styled-components";
import Link from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 200px;
  height: 172px;
  background: #c0c0c0;
  border-radius: 12px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 33%;
`;
function Dropdown() {
  return (
    <Container>
      <Menu>MyPage</Menu>

      <Menu>product</Menu>

      <Menu>Bookmark</Menu>
    </Container>
  );
}

export default Dropdown;
