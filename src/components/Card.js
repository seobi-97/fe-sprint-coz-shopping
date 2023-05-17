import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 260px;
    height: 210px;
    margin: 15px;
  }
  p {
    font-size: 10px;
  }
`;

const Box = styled.div`
  width: 290px;
  height: 260px;
`;
function Card() {
  const product = useSelector((state) => state.product.value);
  const arr = product && product.slice(0, 4);
  return (
    <Container>
      <ContentBox>
        {arr ? (
          arr.map((val) => (
            <Box key={val.id}>
              <img src={val.image_url || val.brand_image_url} />
              <p>{val.title || val.brand_name}</p>
            </Box>
          ))
        ) : (
          <div></div>
        )}
      </ContentBox>
    </Container>
  );
}

export default Card;
