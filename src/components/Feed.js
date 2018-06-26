import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'lore-hook-connect';
import { Link } from 'react-router';
import PayloadStates from '../constants/PayloadStates';
import Tweet from './Tweet';

@connect(function(getState, props) {
  const { location } = props;

  return {
    tweets: getState('tweet.find', {
      pagination: {
        sort: 'createdAt DESC',
        page: location.query.page || '1'
      }
    })
  };
})
class Feed extends React.Component {

  static propTypes = {
    tweets: PropTypes.object.isRequired
  };

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id} tweet={tweet} />
    );
  }

  renderPaginationLink(page, currentPage) {
    return (
      <li key={page} className={currentPage === String(page) ? 'active' : ''}>
        <Link to={{ pathname: '/', query: { page: page } }}>
          {page}
        </Link>
      </li>
    );
  }

  render() {
    const { tweets } = this.props;
    const currentPage = tweets.query.pagination.page;
    const paginationLinks = [];

    if (tweets.state === PayloadStates.FETCHING) {
      return (
        <div className="feed">
          <h2 className="title">
            Feed
          </h2>
          <div className="loader"/>
        </div>
      );
    }

    // calculate the number of pagination links from our metadata, then
    // generate an array of pagination links
    const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
    for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
      paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
    }

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
        <nav>
          <ul className="pagination">
            {paginationLinks}
          </ul>
        </nav>
      </div>
    );
  }

}

export default Feed;
