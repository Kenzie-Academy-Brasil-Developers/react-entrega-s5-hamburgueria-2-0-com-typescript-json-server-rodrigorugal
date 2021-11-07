import styled from "styled-components";

export const ItemStyle = styled.li`
  width: 250px;
  height: 350px;
  margin: 10px;

  border: 2px solid #dfdfdf;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border: 2px solid #27ae60;
  }

  h3 {
    font-size: 12px;
    font-weight: 500;
    color: #017aa2;
  }

  p {
    color: #27ae60;
    font-weight: 600;
    font-size: 22px;
  }

  .boxImage {
    width: 100%;
    max-height: 45%;
    background-color: #8a8a8aba;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .valuesProducts {
    height: 60%;
    width: 100%;
    padding: 10px;
    background-color: #e3e3e3cc;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
