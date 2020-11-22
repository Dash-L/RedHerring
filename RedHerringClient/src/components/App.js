import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Game from "./Game";
import Info from "./Info";
import "./App.css";

class App extends React.Component {
  //Renders 'Game' on "/" route and 'Info' on "/info" route
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Game} />
          <Route path="/info" exact component={Info} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;