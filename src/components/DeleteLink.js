import React from 'react';
import PropTypes from 'prop-types';
import UserCanDeleteTweet from '../decorators/UserCanDeleteTweet';

@UserCanDeleteTweet
class DeleteLink extends React.Component {

  static propTypes = {
    tweet: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { tweet } = this.props;

    lore.dialog.show(function() {
      return lore.dialogs.tweet.destroy(tweet, {
        blueprint: 'optimistic',
        request: function(data) {
          return lore.actions.tweet.destroy(tweet).payload;
        }
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onClick}>
        delete
      </a>
    );
  }

}

export default DeleteLink;
