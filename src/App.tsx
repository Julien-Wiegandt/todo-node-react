import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Connection } from "./views/disconnected/Connection";
import { Tasks } from "./views/connected/Tasks";
import { connected } from "process";

interface ContexteInterface {
  connected: boolean;
  setConnected?: any;
  currentUser?: any;
  setCurrentUser?: any;
}

export const UserContext = React.createContext<ContexteInterface>({ connected: false });

const MyProvider = (props: any) => {
  const [connected, setConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  return (
    <UserContext.Provider
      value={{ connected, setConnected, currentUser, setCurrentUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

function App() {
  const { connected } = React.useContext(UserContext);

  return (
    <MyProvider>
      <AppContainer>{connected ? <Tasks /> : <Connection />}</AppContainer>
    </MyProvider>
  );
}

const AppContainer = styled.div`
  height: 100%;
`;

export default App;
