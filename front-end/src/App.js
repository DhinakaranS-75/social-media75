import React from "react";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
