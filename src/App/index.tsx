import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary, Menu } from "../components";
import store from "../redux/store";
import classes from "./styles.module.css";

const IndexPage = lazy(() =>
  import("../pages").then((module) => ({
    default: module.IndexPage,
  }))
);
const UsersPage = lazy(() =>
  import("../pages/users").then((module) => ({ default: module.UsersPage }))
);
const UserPage = lazy(() =>
  import("../pages/user").then((module) => ({ default: module.UserPage }))
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.container}>
          <Menu />
          <main className={classes.main}>
            <ErrorBoundary>
              <Suspense fallback={<span>Loading...</span>}>
                <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/user/:id" element={<UserPage />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <footer>
            <p>
              Loading icon from{" "}
              <a href="https://loading.io" rel="noreferrer noopener">
                loading.io
              </a>
            </p>
          </footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export { App };
