import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "@app/containers/App";
import { Provider } from "react-redux";
import { store } from "@app/modules/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
