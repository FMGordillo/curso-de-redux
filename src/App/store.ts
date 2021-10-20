import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { userReducerInitialState } from "./reducers/userReducer";
import { postReducerInitialState } from "./reducers/postReducer";

const initialState = {
  users: userReducerInitialState,
  posts: postReducerInitialState,
};

const store = configureStore({
  reducer: reducers,
  middleware: [reduxThunk],
  preloadedState: initialState,
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
