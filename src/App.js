import Header from "./components/Header";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

function App() {
  return (
    <>
      <Header />
      <PageContainer />
    </>
  );
}

export default App;
