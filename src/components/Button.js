import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  font-family: "Cormorant";
  font-size: 16px;
  font-style: italic;
  background: transparent;
  cursor: pointer;
  border: 1px solid white;
  padding: 6px 12px;
  width: fit-content;
  align-self: center;
  border-radius: 6px;

  &:hover {
    border-radius: 0px;
  }

  -webkit-transition: border-radius 0.5s;
  transition: border-radius 0.5s;
`;

function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;
