import * as React from "react";
import { LinkListItemProps } from "./models";

export default class LinkListItem extends React.Component<LinkListItemProps> {
  render() {
    const { link, onDeleteClick } = this.props;
    return (
      <div className="link-list-item">
        <div className="link-list-item__text">
          {link.link} - {link.linkCount}
        </div>
        <div onClick={onDeleteClick} className="link-list-item__delete-button">
          Удалить
        </div>
      </div>
    );
  }
}
