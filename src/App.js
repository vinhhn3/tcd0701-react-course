import axios from "axios";
import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home handleSearch={handleSearch} users={users} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
