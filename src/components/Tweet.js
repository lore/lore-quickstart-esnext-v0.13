import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Tweet extends React.Component {

  static propTypes = {
    tweet: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

  static defaultProps = {
    user: {
      id: 1,
      data: {
        id: 1,
        nickname: "lucca",
        avatar: "https://cloud.githubusercontent.com/assets/2637399/19027072/a36f0c7a-88e1-11e6-931e-7f67fe01367b.png"
      }
    }
  };

  render() {
    const { tweet, user } = this.props;
    const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

    return (
      <li className="list-group-item tweet">
        <div className="image-container">
          <img
            className="img-circle avatar"
            src={user.data.avatar} />
        </div>
        <div className="content-container">
          <h4 className="list-group-item-heading title">
            {user.data.nickname}
          </h4>
          <h4 className="list-group-item-heading timestamp">
            {'- ' + timestamp}
          </h4>
          <p className="list-group-item-text text">
            {tweet.data.text}
          </p>
        </div>
      </li>
    );
  }

}

export default Tweet;
