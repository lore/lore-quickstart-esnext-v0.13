import React from 'react';
import PropTypes from 'prop-types';

class IsOwner extends React.Component {

  static propTypes = {
    tweet: PropTypes.object.isRequired
  };

  static contextTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { tweet, children } = this.props;
    const { user } = this.context;

    if (tweet.data.user === user.id) {
      return children;
    }

    return null;
  }

}

export default IsOwner;
