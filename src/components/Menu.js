import React from "react";
import styled from "styled-components";
import menu from "../menu.svg";

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #181a32;
  flex-direction: column;
  gap: 12px;
  text-align: justify;
`;

const StyledMenu = styled.img`
  height: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Menu() {
  return (
    <PageContainer>
      <StyledMenu src={menu} />
    </PageContainer>
  );
}

export default Menu;
