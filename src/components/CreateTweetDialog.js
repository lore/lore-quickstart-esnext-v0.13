import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class CreateTweetDialog extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node
  };

  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      data: {
        text: ''
      }
    };

    // bind custom methods
    this.show = this.show.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.request = this.request.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.show();
  }

  show() {
    const modal = this.refs.modal;
    $(modal).modal('show');
  }

  dismiss() {
    const modal = this.refs.modal;
    $(modal).modal('hide');
  }

  request(data) {
    lore.actions.tweet.create(data);
  }

  onSubmit() {
    const { data } = this.state;
    this.request(data);
    this.dismiss();
  }

  onChange(name, value) {
    const nextData = _.merge({}, this.state.data);
    nextData[name] = value;
    this.setState({
      data: nextData
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div ref="modal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.dismiss}>
                <span>&times;</span>
              </button>
              <h4 className="modal-title">
                Create Tweet
              </h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={data.text}
                      placeholder="What's happening?"
                      onChange={(event) => {
                        this.onChange('text', event.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="row">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.dismiss}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!data.text}
                    onClick={this.onSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CreateTweetDialog;
