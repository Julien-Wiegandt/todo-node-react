import React, { useState } from "react";
import styled from "styled-components";
import { Connection } from "./views/disconnected/Connection";
import { Tasks } from "./views/connected/Tasks";

function App() {
  const [connected, setConnected] = useState(false);
  return <AppContainer>{connected ? <Tasks /> : <Connection />}</AppContainer>;
}

const AppContainer = styled.div`
  height: 100%;
`;

export default App;
