import styled from "styled-components"

export const Button = styled.button`
  padding: 15px 15px;

  width: 1px 10px;
  border: none;
  border-radius: 8px;
  background-color: #00FAA4;
  box-shadow: 0 0 1em #08263d59;
  color: black;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    transition: 1.2s;
    background-color: #3f4670;
    color: white;
  }
`;