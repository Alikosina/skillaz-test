import * as React from "react";
import { Form } from "@app/containers/Form/FormContainer";
import { Link } from "react-router-dom";

export class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form />
        <Link to="/list">Список</Link>
      </React.Fragment>
    );
  }
}
