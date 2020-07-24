import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles/Circles";
import CircleSelector from "./components/CircleSelector/CircleSelector";

class App extends Component {
  state = {
    Circles: [true, false, false, false],
  };

  handleCircle = (idx) => {
    let circles = [false, false, false, false];
    circles[idx] = true;
    this.setState({ Circles: circles });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selCir={this.state.Circles}
            handleCircle={this.handleCircle}
          />
          <Circles
            selCir={this.state.Circles}
            handleCircle={this.handleCircle}
          />
        </main>
      </div>
    );
  }
}

export default App;
