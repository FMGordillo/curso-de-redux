import { Menu } from "../components/Menu";
import { MainContainer, Main } from "./styles";

import { Route, BrowserRouter } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import React from "react";

const IndexPage = React.lazy(() => import("../pages").then(module => ({
  default: module.IndexPage
})));
const UsersPage = React.lazy(() =>
  import("../pages/users").then((module) => ({ default: module.UsersPage }))
);
const UserPage = React.lazy(() =>
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
            <React.Suspense fallback={<span>Loading...</span>}>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/users" component={UsersPage} />
              <Route path="/user/:id" component={UserPage} />
            </React.Suspense>
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
