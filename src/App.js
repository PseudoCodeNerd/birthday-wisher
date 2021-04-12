import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Message from "./components/Message";
import Magazine from "./components/Magazine";
import Data from "./data/Data";
import Confetti from "./components/Confetti";

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
          <Route path="/src">
            <Magazine />
          </Route>
          <Route exact path="/">
            <div className="App">
              <Message Data={Data} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
