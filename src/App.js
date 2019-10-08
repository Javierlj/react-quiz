import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Game from "./Game";
import NavBar from "./components/NavBar/NavBar";
import Results from "./components/Results/Results";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/" component={Game} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
