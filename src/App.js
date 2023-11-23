import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import { getUsersByLogin } from "./api/GitHubApi";
import GithubState from "./context/github/githubState";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (text) => {
    console.log(text);
    const response = await getUsersByLogin(text);
    console.log(response.data.items);
    setUsers(response.data.items);
  };

  return (
    <GithubState>
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
              <Route exact path="/user/:loginId">
                <User />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
