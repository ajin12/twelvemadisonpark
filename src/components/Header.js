import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import WaitlistModal from "./WaitlistModal";

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
`;

const HeaderItem = styled.div`
  color: white;
  font-family: "Cormorant";
  font-size: 24px;
  cursor: pointer;
`;

function Header() {
  return (
    <Router>
      <HeaderBar>
        <HeaderContainer>
          <Link to="/menu">
            <HeaderItem>menu</HeaderItem>
          </Link>
          <Link to="/about">
            <HeaderItem>about</HeaderItem>
          </Link>
          <Link to="/reserve">
            <HeaderItem>reserve</HeaderItem>
          </Link>
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
