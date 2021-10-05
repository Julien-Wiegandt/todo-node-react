import React, { useState } from "react";
import styled from "styled-components";
import { Connection } from "./views/disconnected/Connection";
import { Tasks } from "./views/connected/Tasks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface ContexteInterface {
  currentUser?: any;
  setCurrentUser?: any;
}

export const UserContext = React.createContext<ContexteInterface>({});

const MyProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

function App() {
  return (
    <Router>
      <MyProvider>
        <AppContainer>
          <Switch>
            <Route path="/" exact render={() => <Connection />} />
            <Route path="/tasks" exact render={() => <Tasks />} />
          </Switch>
        </AppContainer>
      </MyProvider>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100%;
  background-color: #f5f5f6;
`;

export default App;
