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
`;

function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

export default Button;
