import * as React from "react";
import { FormContainerProps, FormContainerState } from "./models";
import { connect } from "react-redux";
import { SET_LINK, INCREASE_COUNT } from "@app/modules/app/appActions";

class FormContainer extends React.Component<
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
    const { href } = e.currentTarget;
    const { setLink, increaseCount, links } = this.props;
    if (!links[href]) {
      setLink(href);
    } else {
      increaseCount(href);
    }
    window.open(href);
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

const mapStateToProps = state => ({
  links: state.app
});

const mapDispatchToProps = dispatch => ({
  setLink: link => {
    dispatch({
      type: SET_LINK,
      payload: link
    });
  },
  increaseCount: link => {
    dispatch({
      type: INCREASE_COUNT,
      payload: link
    });
  }
});

export const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
