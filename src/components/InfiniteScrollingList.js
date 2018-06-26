import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getState } from 'lore-hook-connect';
import PayloadStates from '../constants/PayloadStates';
import LoadMoreButton from './LoadMoreButton';

class InfiniteScrollingList extends React.Component {

  static propTypes = {
    row: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    selectNextPage: PropTypes.func,
    refresh: PropTypes.func,
    selectOther: PropTypes.func,
    exclude: PropTypes.func
  };

  static defaultProps = {
    exclude: function(model) {
      return false;
    }
  };

  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      other: null,
      pages: []
    };

    // bind custom methods
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  // fetch first page
  componentWillMount() {
    const { select, selectOther } = this.props;
    const nextState = this.state;

    nextState.pages.push(select(getState));

    if (selectOther) {
      nextState.other = selectOther(getState);
    }

    this.setState(nextState);
  }

  // refresh data in all pages
  componentWillReceiveProps(nextProps) {
    const { refresh, selectOther } = this.props;
    const { pages } = this.state;
    const nextState = {};

    if (refresh) {
      nextState.pages = pages.map(function(page) {
        return refresh(page, getState);
      });
    }

    if (selectOther) {
      nextState.other = selectOther(getState);
    }

    this.setState(nextState);
  }

  onLoadMore() {
    const { selectNextPage } = this.props;
    const { pages } = this.state;
    const lastPage = pages[pages.length - 1];

    pages.push(selectNextPage(lastPage, getState));

    this.setState({
      pages: pages
    });
  }

  render() {
    const { row, exclude, selectNextPage } = this.props;
    const { pages, other } = this.state;
    const numberOfPages = pages.length;
    const firstPage = pages[0];
    const lastPage = pages[pages.length - 1];

    // if we only have one page, and it's fetching, then it's the initial
    // page load so let the user know we're loading the data
    if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
      return (
        <div className="loader" />
      );
    }

    return (
      <div>
        <ul className="media-list tweets">
          {other ? other.data.map(row) : null}
          {_.flatten(pages.map((models) => {
            return _.filter(models.data, (model) => {
              return !exclude(model);
            }).map(row);
          }))}
        </ul>
        {selectNextPage ? (
          <LoadMoreButton
            lastPage={lastPage}
            onLoadMore={this.onLoadMore}
            nextPageMetaField="nextPage"
          />
        ) : null}
      </div>
    );
  }
}

export default InfiniteScrollingList;
