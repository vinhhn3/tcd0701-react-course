import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" />
          <button className="btn btn-dark btn-block" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
