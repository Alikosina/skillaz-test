import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@app/containers/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "@app/modules/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
