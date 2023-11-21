import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { loginId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`https://api.github.com/users/${loginId}`).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <h1>User Detail</h1>
      <p>Login Id: {loginId} </p>
    </div>
  );
}

export default User;
