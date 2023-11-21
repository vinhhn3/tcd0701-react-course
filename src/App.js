import axios from "axios";
import React from "react";
import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";
import Navbar from "./layout/Navbar";

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {}

  handleSearch = (text) => {
    console.log(text);
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        console.log(response.data.items);
        this.setState({ users: response.data.items });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search handleSearch={this.handleSearch} />
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
