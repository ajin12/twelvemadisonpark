import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import WaitlistModal from "./WaitlistModal";
import logo from "../header_logo.svg";

const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 440px;
  padding: 36px 124px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 28px 60px;
    justify-content: end;
    gap: 28px;
  }
`;

const HeaderItem = styled.div`
  color: white;
  font-family: "Cormorant";
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const HeaderLogo = styled.img`
  position: fixed;
  width: 80px;
  padding: 24px;
  margin-left: 40px;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 768px) {
    width: 48px;
    margin-left: 12px;
  }
`;

function Header() {
  return (
    <Router>
      <Link to="/">
        <HeaderLogo src={logo} />
      </Link>
      <HeaderBar>
        <HeaderContainer>
          <StyledLink to="/menu">
            <HeaderItem>menu</HeaderItem>
          </StyledLink>
          <StyledLink to="/about">
            <HeaderItem>about</HeaderItem>
          </StyledLink>
          <StyledLink to="/reserve">
            <HeaderItem>reserve</HeaderItem>
          </StyledLink>
        </HeaderContainer>
      </HeaderBar>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/reserve" element={<WaitlistModal />}></Route>
      </Routes>
    </Router>
  );
}

export default Header;
