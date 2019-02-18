import * as React from "react";
import { LinkListItemProps } from "./models";

export default class LinkListItem extends React.Component<LinkListItemProps> {
  render() {
    const { link, linkCount } = this.props.link;
    return (
      <div className="link-list-item">
        <div className="link-list-item__text">
          {link} - {linkCount}
        </div>
        <div className="link-list-item__delete-button">Удалить</div>
      </div>
    );
  }
}
