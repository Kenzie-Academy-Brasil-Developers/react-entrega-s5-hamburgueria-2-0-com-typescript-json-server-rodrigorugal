import styled from "styled-components";

export const ScreenLogin = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #e8e8e8;

  display: flex;
`;

export const AreaLogin = styled.section`
  width: 30%;
  height: 100%;
  background-color: #1c1c1c;
  color: #e8e8e8;

  h1 {
    font-size: 28px;
  }

  form {
    /* background-color: #e3e3; */
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  .linkAcess a {
    color: #1afd7a;
    text-decoration: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const BackGroundBurguer = styled.section`
  background-image: url("./image/fundo.png");
  width: 70%;
  height: 100%;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-height: 80px;
  color: #c8c8c8;

  input {
    background-color: transparent;
    border: none;
    border-radius: 10px;

    background-color: #c8c8c8;
    min-height: 40px;
    min-width: 250px;
  }
`;
