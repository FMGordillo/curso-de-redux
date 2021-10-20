import { actions } from "../actions/postActions";
import * as status from "../actions/status";

export const postReducerInitialState = {
  posts: [],
  status: status.IDLE_STATUS,
  error: false,
};

const reducer = (state = postReducerInitialState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS_REQUEST:
      return { ...state, status: status.LOADING_STATUS };
    case actions.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, status: status.SUCCESS_STATUS };
    case actions.FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        status: status.FAILURE_STATUS,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
