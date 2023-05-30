import React, { useState } from "react";
import { styled } from "styled-components";
import bookmark from "../images/bookmark2.svg";
import bookmarkOn from "../images/bookmarkOn.svg";

const Box = styled.div`
  width: 290px;
  height: 260px;
  margin: 10px;
  p {
    font-weight: 700;
    font-size: 12px;
  }
`;
const Bookmark = styled.img`
  position: relative;
  top: -10px;
  right: 30px;
  z-index: 1;
  width: 20px;
  height: 20px;
`;
const Picture = styled.img`
  width: 260px;
  height: 210px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  cursor: pointer;
`;

function Card({ product, modalOpen, productUpdate }) {
  const [isOn, setIsOn] = useState(false);
  const localStorage = window.localStorage;
  const bookmarkStorage = JSON.parse(localStorage.getItem("bookmark"));

  const handleClick = (id) => {
    setIsOn(!isOn);
    //bookmark라는 localStorage가 생성되지 않았거나, 빈 배열일때
    if (bookmarkStorage === null || bookmarkStorage.length === 0) {
      localStorage.setItem("bookmark", JSON.stringify([id]));
    } else {
      //bookmarkStorage에 이미 존재할 때
      if (bookmarkStorage.filter((val) => val === id).length !== 0) {
        localStorage.setItem(
          "bookmark",
          JSON.stringify(bookmarkStorage.filter((val) => val !== id))
        );
      } else {
        //bookmarkStorage에 존재하지 않을 때 추가해준다.
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...bookmarkStorage, id])
        );
      }
    }
  };
  return (
    <>
      {product ? (
        product.map((val) => (
          <Box key={val.id}>
            <Picture
              onClick={() => {
                modalOpen();
                productUpdate(val);
              }}
              src={val.image_url || val.brand_image_url}
            />
            <Bookmark
              onClick={() => handleClick(val.id)}
              src={isOn ? bookmarkOn : bookmark}
            />
            <p>{val.title || val.brand_name}</p>
          </Box>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Card;
