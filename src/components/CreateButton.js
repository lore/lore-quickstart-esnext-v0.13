import React from 'react';
import PropTypes from 'prop-types';

class CreateButton extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    lore.dialog.show(function() {
      return lore.dialogs.tweet.create({
        blueprint: 'optimistic',
        request: function(data) {
          return lore.actions.tweet.create(data).payload;
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
