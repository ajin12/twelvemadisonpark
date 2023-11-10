import logo from "./logo.svg";
import Header from "./components/Header";
import Button from "./components/Button";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  gap: 48px;
`;

const StyledLogo = styled.img`
  height: 25vmin;
  pointer-events: none;
`;

function App() {
  return (
    <div>
      <Header />
      <StyledContainer>
        <StyledLogo src={logo} className="App-logo" alt="logo" />
        <Button text="waitlist" />
      </StyledContainer>
    </div>
  );
}

export default App;
