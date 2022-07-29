import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Menu } from "../components";
import store from "../redux/store";
import classes from "./app.module.css";

import "./reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Menu />
        <main className={classes.main}>
          <Component {...pageProps} />
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
    </Provider>
  );
}
