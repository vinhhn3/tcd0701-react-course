import React from "react";
import "./App.css";

class App extends React.Component {
  // Properties
  state = {
    name: "Vinh Hoang",
    age: 30,
  };

  // Methods
  increaseAge = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>My name is {this.state.name}</p>
        <p>My age is {this.state.age}</p>
        <button onClick={this.increaseAge}>Increase age</button>
      </div>
    );
  }
}

export default App;
