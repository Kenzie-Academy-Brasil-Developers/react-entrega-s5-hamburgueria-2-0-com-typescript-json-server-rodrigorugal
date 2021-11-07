import styled from "styled-components";

export const FullScreen = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("./image/fundo.png");

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    min-height: 10%;
    background-color: #e3e3e3;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const BodyStyle = styled.section`
  width: 100%;
  height: 90%;

  ul {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;

    overflow: auto;

    display: flex;
    flex-wrap: wrap;
  }
`;
