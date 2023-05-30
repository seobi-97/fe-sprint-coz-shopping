import React, { useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  position: absolute;
`;
const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;
const Container2 = styled.div`
  position: relative;
`;
const Picture = styled.img`
  width: 700px;
  height: 500px;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
function Modal({ product, modalOpen }) {
  const modalRef = useRef(null);
  console.log(product);
  const img_url = product.image_url !== null ? product.image_url : null;
  const brand_image_url =
    product.brand_image_url !== null ? product.brand_image_url : null;

  const modalSideClick = (e) => {
    if (modalRef.current === e.target) {
      modalOpen();
    }
  };
  return (
    <Container>
      <ModalBackdrop ref={modalRef} onClick={modalSideClick}>
        <Container2>
          <Picture src={img_url || brand_image_url} />
        </Container2>
      </ModalBackdrop>
    </Container>
  );
}

export default Modal;
