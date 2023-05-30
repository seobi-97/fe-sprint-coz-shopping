import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/product";
import Card from "../components/Card";
import styled from "styled-components";
import Modal from "../components/Modal";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  margin-left: 100px;
  margin-top: 70px;
  font-size: 20px;
  font-weight: 700;
`;

function MainPage() {
  const [isOpen, setOpen] = useState(false);
  const [bookmark, setBookmark] = useState([]);
  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const [modalOpen, setModalopen] = useState(false);
  const [productOne, setProductone] = useState(null);

  //hamburger 클릭 시 dropdown menu 나타남
  const handleClick = () => {
    setOpen(!isOpen);
  };
  const ModalOpen = () => {
    setModalopen(!modalOpen);
  };
  const productUpdate = (data) => {
    setProductone(data);
  };
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        //전체 리스트 100개 redux에 저장
        dispatch(setProduct(res));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header handleClick={() => handleClick()} />
      {isOpen ? <Dropdown /> : <></>}

      <Body>
        <Text>상품 리스트</Text>
        <ContentBox>
          <Card
            modalOpen={ModalOpen}
            productUpdate={productUpdate}
            product={product && product.slice(0, 4)}
          />
        </ContentBox>
        <Text>북마크 리스트</Text>
        <ContentBox>
          <Card
            modalOpen={ModalOpen}
            productUpdate={productUpdate}
            product={product && product.slice(0, 4)}
          />
        </ContentBox>
        {modalOpen ? (
          <Modal product={productOne} modalOpen={ModalOpen} />
        ) : null}
      </Body>
      <Footer />
    </>
  );
}

export default MainPage;
