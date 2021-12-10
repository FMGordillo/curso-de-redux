import { Status } from 'App/types'
import { USER_ACTIONS } from '../actions'

export interface UserState {
  data: unknown[]
  selectedUser: unknown
  status: Status
  error: boolean
}

export const userReducerInitialState: UserState = {
  data: [],
  selectedUser: {},
  status: Status.IDLE,
  error: false
}

const reducer = (state = userReducerInitialState, action): UserState => {
  switch (action.type) {
    case USER_ACTIONS.FETCH_USER_REQUEST:
      return { ...state, status: Status.LOADING }
    case USER_ACTIONS.FETCH_USER_SUCCESS:
      return { ...state, selectedUser: action.payload, status: Status.SUCCESS }
    case USER_ACTIONS.FETCH_USER_FAILURE:
      return { ...state, status: Status.FAILURE, error: true }

    case USER_ACTIONS.FETCH_USERS_REQUEST:
      return { ...state, status: Status.LOADING }
    case USER_ACTIONS.FETCH_USERS_SUCCESS:
      return { ...state, data: action.payload, status: Status.SUCCESS }
    case USER_ACTIONS.FETCH_USERS_FAILURE:
      return { ...state, status: Status.FAILURE, error: true }
    default:
      return state
  }
}

export default reducer
