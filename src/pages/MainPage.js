import React, { useState } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

function MainPage() {
  const [isopen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isopen);
  };
  return (
    <>
      <Header handleClick={() => handleClick()} />
      {isopen ? <Dropdown /> : <></>}
      <Footer />
    </>
  );
}

export default MainPage;
