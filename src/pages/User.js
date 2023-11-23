import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetailByLogin } from "../api/GitHubApi";

function User() {
  const { loginId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDetailByLogin(loginId);
        console.log(response.data);
        setUser(response.data);
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
