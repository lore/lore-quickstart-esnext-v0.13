import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

class Feed extends React.Component {

  static propTypes = {
    tweets: PropTypes.object.isRequired
  };

  static defaultProps = (function() {
    const tweet = {
      id: 1,
      cid: 'c1',
      state: 'RESOLVED',
      data: {
        id: 1,
        userId: 1,
        text: 'Nothing can beat science!',
        createdAt: '2018-04-24T05:10:49.382Z'
      }
    };

    return {
      tweets: {
        state: 'RESOLVED',
        data: [tweet]
      }
    };
  })();

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id} tweet={tweet} />
    );
  }

  render() {
    const { tweets } = this.props;

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
