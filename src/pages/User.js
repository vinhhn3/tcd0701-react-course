import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/githubContext";
function User() {
  const { loginId } = useParams();
  const githubContext = useContext(GithubContext);
  const { user, getUser } = githubContext;
  useEffect(() => {
    const fetchData = async () => {
      try {
        getUser(loginId);
      } catch (error) {
        // Handle error as needed
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>User Detail</h1>
      <p>Login Id: {user.login} </p>
      <p></p>
    </div>
  );
}

export default User;
