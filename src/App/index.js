import { Menu } from "../components/Menu";
import { Main } from "./styles";

import { Route, BrowserRouter } from "react-router-dom";
import { IndexPage } from "../pages";
import { UsersPage } from "../pages/users";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Main>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/users" component={UsersPage} />
        </Main>
      </BrowserRouter>
    </Provider>
  );
}

export { App };