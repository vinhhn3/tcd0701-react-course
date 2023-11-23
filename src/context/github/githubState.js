import { useReducer } from "react";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
const GithubState = (props) => {
  // Define Global State
  const initialState = {
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        dispatch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
