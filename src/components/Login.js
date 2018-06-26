import React from 'react';
import PropTypes from 'prop-types';
import Auth0 from 'auth0-js';
import ShowLoadingScreen from './ShowLoadingScreen';

class Login extends React.Component {

  componentDidMount() {
    const auth0 = new Auth0.WebAuth(lore.config.auth0);
    auth0.authorize();
  }

  render() {
    return (
      <ShowLoadingScreen/>
    );
  }

}

export default Login;
