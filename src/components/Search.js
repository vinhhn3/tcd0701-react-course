import React, { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const { searchUsers } = githubContext;
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop form loading
    searchUsers(text);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" placeholder="Search" />
        <button
          onClick={handleSubmit}
          className="btn btn-dark btn-block"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
