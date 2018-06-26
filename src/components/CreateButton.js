import React from 'react';
import PropTypes from 'prop-types';
import CreateTweetDialog from './CreateTweetDialog';

class CreateButton extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    lore.dialog.show(function() {
      return (
        <CreateTweetDialog />
      );
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
