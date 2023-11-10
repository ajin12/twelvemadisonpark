import Header from "./components/Header";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282c34;
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
