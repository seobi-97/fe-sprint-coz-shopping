import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 7vh;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 10px;
    color: #888888;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  p {
    margin: 1px;
  }
`;
function Footer() {
  return (
    <Container>
      <Text>
        <p>개인정보 처리방침</p>
        <p>|</p>
        <p>이용 약관</p>
      </Text>
      <p>All rights reserved @ Codestates</p>
    </Container>
  );
}

export default Footer;
