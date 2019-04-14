import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class TaskSearchControl extends Component {
  /* jshint ignore:start */
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  // TODO: record all events in search field
  recordEvents = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      // NOTE: Multi inputs
      [name]: value
    });
  }

  // TODO: search keyword
  searchTask = () => {
    this.props.onSearchTask(this.state.keyword);
  }

  render() {
    let {keyword} = this.state;
    return(
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="keyword"
          value={keyword}
          onChange={this.recordEvents}
          placeholder="Enter keyword..."
        />
        <span className="input-group-btn">&nbsp;
          <button type="button" className="btn btn-primary" onClick={this.searchTask}>
            <i className="fa fa-search"></i>&nbsp;
            Search
          </button>
        </span>
      </div>
    );
  }
  /* jshint ignore:end */
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchTask: keyword => {
      return dispatch(actions.searchTask(keyword));
    }
  };
};

export default connect(null, mapDispatchToProps)(TaskSearchControl);