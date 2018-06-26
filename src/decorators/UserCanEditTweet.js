import PropTypes from 'prop-types';
import { AuthorizationGenerator } from 'lore-auth';

export default AuthorizationGenerator({
  displayName: 'UserCanEditTweet',

  propTypes: {
    tweet: PropTypes.object.isRequired
  },

  contextTypes: {
    user: PropTypes.object.isRequired
  },

  isAuthorized() {
    const { tweet } = this.props;
    const { user } = this.context;

    return tweet.data.user === user.id;
  }
});
