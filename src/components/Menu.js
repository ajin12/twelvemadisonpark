import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  flex-direction: column;
  gap: 12px;
  text-align: justify;
`;

const Text = styled.div`
  color: white;
  font-family: "Cormorant";
  font-size: 18px;
  font-style: italic;
`;

function Menu() {
  return (
    <PageContainer>
      <Text>Coming soon!</Text>
    </PageContainer>
  );
}

export default Menu;
