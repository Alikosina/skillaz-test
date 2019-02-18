import * as React from "react";
import { connect } from "react-redux";
import LinkListItem from "@app/components/LinkListItem/LinkListItem";
import { getArrayFromLinks } from "@app/utils/helpers";

class ListPageContainer extends React.Component {
  render() {
    const { links } = this.props;
    const linksArray = getArrayFromLinks(links);
    console.log("links = ", linksArray);
    return linksArray.map(l => <LinkListItem key={l.link} link={l} />);
  }
}

const mapStateToProps = state => ({
  links: state.app
});

export const ListPage = connect(mapStateToProps)(ListPageContainer);
