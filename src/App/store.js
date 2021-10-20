import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from "./reducers";
import { userReducerInitialState } from "./reducers/userReducer";

const initialState = {
  users: userReducerInitialState
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
