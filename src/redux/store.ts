import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer, postReducer } from "./reducers";

const store = configureStore({
  reducer: {
    [userReducer.default.reducerPath]: userReducer.default.reducer,
    [postReducer.default.reducerPath]: postReducer.default.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userReducer.default.middleware,
      postReducer.default.middleware,
    ]),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
