import React from "react";
import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";
import Navbar from "./layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
