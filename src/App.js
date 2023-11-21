import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";
import Navbar from "./layout/Navbar";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = (text) => {
    console.log(text);
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        console.log(response.data.items);
        setUsers(response.data.items);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search handleSearch={handleSearch} />
        <Users users={users} />
      </div>
    </div>
  );
};

export default App;
