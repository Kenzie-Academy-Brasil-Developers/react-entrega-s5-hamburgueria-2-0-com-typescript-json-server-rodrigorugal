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

    h3 {
      padding: 10px;
      background: #ffffff;
      width: 83px;
      cursor: pointer;
      border-bottom: 3px solid green;
      border-radius: 5px;

      &:hover {
        background-color: #80e57e;
      }
    }
  }
`;

export const BodyStyle = styled.section`
  width: 100%;
  height: 90%;

  overflow: auto;
  position: relative;

  ul {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;

    overflow: auto;

    display: flex;

    flex-wrap: wrap;
  }
`;
