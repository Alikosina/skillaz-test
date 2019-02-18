import * as React from "react";

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="link-input">Введите ссылку:</label>
        <input id="link-input" type="text" placeholder="ссылка" />
      </div>
    );
  }
}
