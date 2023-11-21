import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Stop form loading
    this.props.handleSearch(this.state.text);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
          />
          <button
            onClick={this.handleSubmit}
            className="btn btn-dark btn-block"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
