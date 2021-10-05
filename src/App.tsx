import React from "react";
import styled from "styled-components";
import { Connection } from "./views/disconnected/Connection";
import { Tasks } from "./views/connected/Tasks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" exact render={() => <Connection />} />
          <Route path="/tasks" exact render={() => <Tasks />} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100%;
  background-color: #f5f5f6;
`;

export default App;
