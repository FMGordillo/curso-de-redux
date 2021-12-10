import { Status } from 'App/types'
import { POST_ACTIONS } from '../actions'

export interface PostState {
  posts: string[]
  status: Status
  error: boolean
}

export const postReducerInitialState: PostState = {
  posts: [],
  status: Status.IDLE,
  error: false
}

const reducer = (state = postReducerInitialState, action): PostState => {
  switch (action.type) {
    case POST_ACTIONS.FETCH_POSTS_REQUEST:
      return { ...state, status: Status.LOADING }
    case POST_ACTIONS.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, status: Status.SUCCESS }
    case POST_ACTIONS.FETCH_POSTS_FAILURE:
      // TODO: Donde pongo el `error`?
      return {
        ...state,
        posts: [],
        status: Status.FAILURE,
        error: true
      }
    default:
      return state
  }
}

export default reducer
