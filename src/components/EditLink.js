import React from 'react';
import PropTypes from 'prop-types';
import UserCanEditTweet from '../decorators/UserCanEditTweet';

@UserCanEditTweet
class EditLink extends React.Component {

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
      return lore.dialogs.tweet.update(tweet, {
        blueprint: 'optimistic',
        request: function(data) {
          return lore.actions.tweet.update(tweet, data).payload;
        }
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onClick}>
        edit
      </a>
    );
  }

}

export default EditLink;
