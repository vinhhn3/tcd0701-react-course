import { GET_USERS, GET_USER_DETAIL } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return state;
    case GET_USER_DETAIL:
      return state;
    default:
      return state;
  }
};
