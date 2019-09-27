import React, { Component } from "react";
import Message from "./lib/component/string";
class App extends Component {
  state = {
    message: ""
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{Message("Demo Library")}</h1>
        </header>
      </div>
    );
  }
}

export default App;
