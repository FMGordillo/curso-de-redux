import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { initialState as usersInitialState } from "./reducers/userReducer";
import { initialState as postsInitialState } from "./reducers/postReducer";

const initialState = {
  users: usersInitialState,
  posts: postsInitialState,
};

const store = configureStore({
  reducer: reducers,
  middleware: [reduxThunk],
  preloadedState: initialState,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
