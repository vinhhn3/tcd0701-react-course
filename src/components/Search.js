import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const { handleSearch } = props;

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop form loading
    handleSearch(text);
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
