import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import FormInput from "./FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  background-color: #282c34;
  display: flex;
  align-items: center;
  color: white;
  height: 100vh;
  justify-content: center;
`;

const StyledModal = styled.div`
  position: relative;
  width: 540px;
  border: 1px solid white;
  border-radius: 8px;
`;

const StyledForm = styled.form`
  padding: 88px;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 12px;
  cursor: pointer;
`;

function WaitlistModal() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted"); // TODO
  };

  return (
    <StyledContainer>
      <StyledModal>
        <StyledCloseIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormContainer>
            <FormInput
              id="name"
              name="name"
              label="full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              id="email"
              name="email"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="phone"
              name="phone"
              label="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button type="submit" text="join waitlist" />
          </StyledFormContainer>
        </StyledForm>
      </StyledModal>
    </StyledContainer>
  );
}

export default WaitlistModal;
