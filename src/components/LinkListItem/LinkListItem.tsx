import * as React from "react";
import { LinkListItemProps } from "./models";

export default class LinkListItem extends React.Component<LinkListItemProps> {
  render() {
    const { link } = this.props;
    return <div className="link-list-item" />;
  }
}
