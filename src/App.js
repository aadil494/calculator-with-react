import styled from "styled-components";
import HomePage from "./app/containers/HomePage";

const AppContainer = styled.div`
  width:100%;
  height:100%;
  min-height:100%;
`

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
