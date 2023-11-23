import { useReducer } from "react";
import { getUserDetailByLogin, getUsersByLogin } from "../../api/GitHubApi";
import { GET_USER_DETAIL, SEARCH_USERS } from "../types";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
const GithubState = (props) => {
  // Define Global State
  const initialState = {
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    const response = await getUsersByLogin(text);
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };

  const getUser = async (loginId) => {
    const response = await getUserDetailByLogin(loginId);
    dispatch({ type: GET_USER_DETAIL, payload: response.data });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        searchUsers,
        getUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
