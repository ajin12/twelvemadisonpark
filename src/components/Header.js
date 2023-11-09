import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 440px;
  padding: 36px 124px;
  justify-content: space-between;
`;

const HeaderItem = styled.div`
  color: white;
  font-family: "Cormorant";
  font-size: 24px;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderBar>
      <HeaderContainer>
        <HeaderItem>menu</HeaderItem>
        <HeaderItem>about</HeaderItem>
        <HeaderItem>reserve</HeaderItem>
      </HeaderContainer>
    </HeaderBar>
  );
}

export default Header;
