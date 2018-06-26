import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import CreateButton from './CreateButton';

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top header">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Lore Quickstart
            </Link>
          </div>
          <CreateButton/>
        </div>
      </nav>
    );
  }

}

export default Header;
