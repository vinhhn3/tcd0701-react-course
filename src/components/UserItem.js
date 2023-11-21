import React, { Component } from "react";

export default class UserItem extends Component {
  render() {
    return (
      <div className="card text-center">
        <img
          alt="avatar"
          src={this.props.user.avatar_url}
          className="round-img"
          style={{ width: "60px" }}
        />
        <h2>{this.props.user.login}</h2>
        <a href={this.props.user.html_url} className="btn btn-primary btn-sm">
          More
        </a>
      </div>
    );
  }
}
