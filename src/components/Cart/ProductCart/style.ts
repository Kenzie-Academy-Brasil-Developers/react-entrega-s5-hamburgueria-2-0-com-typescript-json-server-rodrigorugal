import styled from "styled-components";

export const ProductItemCart = styled.li`
  width: 95%;
  height: 100px;
  margin: 10px 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 2px solid gray;

  .infoProd {
    min-width: 160px;
    max-width: 160px;
    width: 160px;
  }

  .priceItem {
    /* background-color: #017aa8; */
    width: 100px;
    max-width: 100px;
    min-width: 100px;
  }

  h1 {
    font-size: 20px;
    color: #27ae60;
  }

  h3 {
    color: #017aa2;
  }

  img {
    height: 100%;
    width: 100px;
    /* background-color: #ffffff; */
  }
`;
