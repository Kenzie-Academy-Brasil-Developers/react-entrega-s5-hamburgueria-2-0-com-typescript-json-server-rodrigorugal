import styled from "styled-components";

export const BoxCart = styled.div`
  background-color: #e3e3e3e3;
  border-radius: 10px;
  border: 1px solid gray;
  position: relative;

  min-width: 450px;
  width: 450px;
  height: 500px;

  max-width: 400px;
  max-height: 500px;

  position: fixed;

  bottom: 10px;
  right: 150px;

  .boxItens {
    max-height: 403px;
    overflow: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderCart = styled.div`
  height: 5vh;
  width: 100%;
  background-color: #27ae60;
  border-radius: 9px 8px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterCart = styled.div`
  background-color: lightblue;
  height: 10vh;
  width: 100%;

  border-radius: 0 0 9px 8px;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
