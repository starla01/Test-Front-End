import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.sass";
import App from "./App";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";
import { debugContextDevtool } from "react-context-devtool";

// States
import Provider from "./Providers";

const history = createBrowserHistory();
const container = document.getElementById("root");

ReactDOM.render(
  <Provider>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  container
);

debugContextDevtool(container);

if (localStorage.testSW) serviceWorker.register();
