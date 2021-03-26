import React from "react";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/u/:id" children={<Dashboard />} />
      <Route children={<NotFound />} />
    </Switch>
  );
};

export default App;
