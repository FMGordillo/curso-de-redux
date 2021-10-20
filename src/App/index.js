import { Menu } from "../components/Menu";
import { MainContainer, Main } from "./styles";

import { Route, BrowserRouter } from "react-router-dom";
import { IndexPage } from "../pages";
import { UsersPage } from "../pages/users";
import { UserPage } from "../pages/user";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer>
          <header>
            <Menu />
          </header>
          <Main>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route path="/user/:id" component={UserPage} />
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
