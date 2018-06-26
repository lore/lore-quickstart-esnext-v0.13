import React from 'react';
import PropTypes from 'prop-types';

class Feed extends React.Component {

  render() {
    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {/* Tweets */}
        </ul>
      </div>
    );
  }

}

export default Feed;
