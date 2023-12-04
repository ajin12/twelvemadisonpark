import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import logo from "../logo.svg";
import WaitlistModal from "./WaitlistModal";

const StyledContainer = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 48px;
  height: 100vh;
  justify-content: center;
`;

const StyledLogo = styled.img`
  height: 25vmin;
  pointer-events: none;
`;

function Home() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <StyledContainer>
      {showWaitlistModal ? (
        <WaitlistModal />
      ) : (
        <>
          <StyledLogo src={logo} alt="logo" />
          <Button text="waitlist" onClick={() => setShowWaitlistModal(true)} />
        </>
      )}
    </StyledContainer>
  );
}

export default Home;
