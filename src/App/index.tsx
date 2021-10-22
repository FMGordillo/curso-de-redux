import { ErrorBoundary, Menu } from "../components";
import { MainContainer, Main } from "./styles";

import { Route, BrowserRouter } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";

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
        <MainContainer>
          <header>
            <Menu />
          </header>
          <Main>
            <ErrorBoundary>
              <Suspense fallback={<span>Loading...</span>}>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/users" component={UsersPage} />
                <Route path="/user/:id" component={UserPage} />
              </Suspense>
            </ErrorBoundary>
          </Main>
          <footer>
            <p>
              Loading icon from{" "}
              <a href="https://loading.io" rel="noreferrer noopener">
                loading.io
              </a>
            </p>
          </footer>
        </MainContainer>
      </BrowserRouter>
    </Provider>
  );
}

export { App };
