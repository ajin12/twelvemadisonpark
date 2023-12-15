import React from "react";
import styled from "styled-components";

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-family: "Cormorant";
  font-style: italic;
`;

const StyledInput = styled.input`
  font-family: "Cormorant";
  font-size: 16px;
  color: white;
  background: transparent;
  border: 1px solid white;
  height: 32px;
  padding: 0px 8px;
  margin: 4px 0px 32px 0px;

  &:focus {
    outline: none;
  }
`;

function FormInput({ id, name, value, label, type = "text", onChange }) {
  return (
    <StyledFormInput>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      />
    </StyledFormInput>
  );
}

export default FormInput;
