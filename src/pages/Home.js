import React from "react";
import Search from "../components/Search";
import Users from "../components/Users";

function Home(props) {
  const { handleSearch, users } = props;
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Users users={users} />
    </div>
  );
}

export default Home;
