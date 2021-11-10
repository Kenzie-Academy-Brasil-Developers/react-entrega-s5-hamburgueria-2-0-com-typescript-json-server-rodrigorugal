import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #27ae60;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: #f3f3f3;
  cursor: pointer;

  font-size: 15px;
  font-weight: 600;

  &:hover {
    border-color: #0f0f0f;
    color: #0f0f0f;
    background-color: #1afd7a;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;
