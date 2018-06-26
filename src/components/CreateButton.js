import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CreateTweetDialog from './CreateTweetDialog';

class CreateButton extends React.Component {

  static contextTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { user } = this.context;

    lore.dialog.show(function() {
      return lore.dialogs.tweet.create({
        blueprint: 'optimistic',
        request: function(data) {
          return lore.actions.tweet.create(_.defaults({
            user: user.id,
            createdAt: new Date().toISOString()
          }, data)).payload;
        }
      });
    });
  }

  render () {
    return (
      <button
        type="button"
        className="btn btn-primary btn-lg create-button"
        onClick={this.onClick}>
        +
      </button>
    );
  }

}

export default CreateButton;
