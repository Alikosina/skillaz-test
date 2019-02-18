import * as React from "react";
import { connect } from "react-redux";
import LinkListItem from "@app/components/LinkListItem/LinkListItem";
import { getArrayFromLinks } from "@app/utils/helpers";
import { DELETE_LINK } from "@app/modules/app/appActions";

class ListPageContainer extends React.Component<{
  links: {
    [keyof: string]: number;
  };
  deleteLink: (link: string) => void;
}> {
  deleteLink = (link: string) => {
    const { deleteLink } = this.props;
    deleteLink(link);
  };

  render() {
    const { links } = this.props;
    const linksArray = getArrayFromLinks(links);
    return linksArray.map(l => (
      <LinkListItem
        onDeleteClick={() => {
          this.deleteLink(l.link);
        }}
        key={l.link}
        link={l}
      />
    ));
  }
}

const mapStateToProps = state => ({
  links: state.app
});

const mapDispatchToProps = dispatch => ({
  deleteLink: link => {
    dispatch({
      type: DELETE_LINK,
      payload: link
    });
  }
});

export const ListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPageContainer);
