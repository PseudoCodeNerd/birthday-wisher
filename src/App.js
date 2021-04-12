import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Message from "./components/Message";
import Magazine from "./components/Magazine";
import Data from "./data/Data";

class App extends React.Component {
  componentWillMount() {
    document.body.style.background = Data.color;
    document.querySelector(
      ".favicon"
    ).href = `//dummyimage.com/64x64/${Data.color.substring(
      1
    )}/${Data.color.substring(1)}`;
    document.querySelector(".theme-color").content = Data.color;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Message Data={Data} />
          </Route>
          <Route path="/src">
            <Magazine />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
