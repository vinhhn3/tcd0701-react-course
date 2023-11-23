import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getUsersByLogin = (login) => {
  return axiosClient.get(`/search/users?q=${login}`);
};

const getUserDetailByLogin = (login) => {
  return axiosClient.get(`/users/${login}`);
};

export { getUserDetailByLogin, getUsersByLogin };
