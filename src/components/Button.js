import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  border: 1px solid white;
  padding: 6px 12px;
  cursor: pointer;
`;

const ButtonText = styled.div`
  color: white;
  font-family: "Cormorant";
  font-size: 16px;
  font-style: italic;
`;

function Button({ text }) {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
