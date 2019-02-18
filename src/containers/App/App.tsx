import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { MainPage } from "@app/pages/MainPage/MainPage";
import { ListPage } from "@app/pages/ListPage/ListPage";

export class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/list" component={ListPage} />
      </Switch>
    );
  }
}
