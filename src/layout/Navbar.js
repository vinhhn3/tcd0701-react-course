import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-primary">
        <h2>TCD0701 Github Finder</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    );
  }
}
