import * as React from "react";
import { FormContainerProps, FormContainerState } from "./models";

export class FormContainer extends React.Component<
  FormContainerProps,
  FormContainerState
> {
  state: FormContainerState = {
    link: ""
  };

  handleLinkField = e => {
    const { currentTarget } = e;
    this.setState({
      link: currentTarget.value
    });
  };

  isUrl = (s: string) => {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  };

  handleLinkClick = e => {
    e.preventDefault();
    const { currentTarget } = e;
    window.open(currentTarget.href);
  };

  render() {
    const { link } = this.state;
    const isUrl = this.isUrl(link);
    return (
      <div>
        <label htmlFor="link-input">Введите ссылку: </label>
        <input
          value={link}
          onChange={this.handleLinkField}
          id="link-input"
          type="text"
          placeholder="ссылка"
        />
        <div>
          Сокращенная ссылка -{" "}
          {isUrl && (
            <a onClick={this.handleLinkClick} target="blank" href={link}>
              {new URL(link).host}
            </a>
          )}
        </div>
      </div>
    );
  }
}
