import { GET_USER_DETAIL, SEARCH_USERS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case GET_USER_DETAIL:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};
