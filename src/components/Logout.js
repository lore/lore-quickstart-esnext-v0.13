import React from 'react';
import PropTypes from 'prop-types';
import auth from '../utils/auth';
import ShowLoadingScreen from './ShowLoadingScreen';

class Logout extends React.Component {

  static propTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { router } = this.props;

    auth.deleteToken();
    router.push('/');
  }

  render() {
    return (
      <ShowLoadingScreen/>
    );
  }

}

export default Logout;
