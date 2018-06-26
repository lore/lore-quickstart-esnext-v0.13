import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'lore-hook-connect';
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

  render() {
    const { tweets } = this.props;

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

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
      </div>
    );
  }

}

export default Feed;
