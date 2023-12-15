import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import FormInput from "./FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api";

const StyledContainer = styled.div`
  background-color: #181a32;
  display: flex;
  align-items: center;
  color: white;
  height: 100vh;
  justify-content: center;
`;

const StyledModal = styled.div`
  position: relative;
  width: 548px;
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

const StyledMessage = styled.div`
  font-family: "Cormorant";
  font-size: 16px;
  color: ${(props) => (props.isError ? "red" : "white")};
  align-self: center;
  margin: 8px 0px;
`;

function WaitlistModal() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNumbersOnly = phone.replace(/\D/g, "");

    if (!name || !email || !phoneNumbersOnly) {
      setMessage("Please fill out all fields.");
      return;
    }

    const success = await addUser({ name, email, phone: phoneNumbersOnly });
    if (success) {
      setShowSuccess(true);
      setMessage(
        "You've been added to the waitlist! We'll let you know when reservations open up and look forward to seeing you soon."
      );
    } else {
      setMessage("You've already joined the waitlist.");
    }
  };

  return (
    <StyledContainer>
      <StyledModal>
        <StyledCloseIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormContainer>
            {showSuccess ? (
              <StyledMessage>{message}</StyledMessage>
            ) : (
              <>
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                  id="phone"
                  name="phone"
                  label="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button type="submit" text="join waitlist" />
                <StyledMessage isError={true}>{message}</StyledMessage>
              </>
            )}
          </StyledFormContainer>
        </StyledForm>
      </StyledModal>
    </StyledContainer>
  );
}

export default WaitlistModal;
