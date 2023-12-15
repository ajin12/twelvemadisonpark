import React from "react";
import styled from "styled-components";
import Button from "./Button";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  background-color: #181a32;
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
  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="logo" />
      <Link to="/reserve">
        <Button text="waitlist" />
      </Link>
    </StyledContainer>
  );
}

export default Home;
