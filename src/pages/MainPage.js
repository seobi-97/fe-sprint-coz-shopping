import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/product";
import Card from "../components/Card";

function MainPage() {
  const [isOpen, setOpen] = useState(false);
  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setProduct(res));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header handleClick={() => handleClick()} />
      {isOpen ? <Dropdown /> : <></>}
      <Card />
      <Footer />
    </>
  );
}

export default MainPage;
