import { Menu } from "../components/Menu";
import { Main } from "./styles";

import { Route, BrowserRouter } from "react-router-dom";
import { IndexPage } from "../pages";
import { UsersPage } from "../pages/users"

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Main>
        <Route exact path="/" component={IndexPage} />
        <Route exact path ="/users" component={UsersPage} />
      </Main>
    </BrowserRouter>
  );
}

export { App };
