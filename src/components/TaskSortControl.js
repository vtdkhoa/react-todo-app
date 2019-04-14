/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class TaskSortControl extends Component {
  /* jshint ignore:start */
  sortTask = (sortBy, sortValue) => {
    this.props.onSortTask({
      by: sortBy,
      value: sortValue
    });
  }

  render() {
    let {sort} = this.props;
    return(
      <div className="dropdown show">
        <a className="btn btn-primary text-white" role="button" id="dropdownMenu"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort by&nbsp;
          <i className="fa fa-caret-square-o-down"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
          <a className="dropdown-item" role="button" onClick={() => this.sortTask('name', 1)}>
            <i className="fa fa-sort-alpha-asc"></i>
            <span className={(sort.by === 'name' && sort.value === 1) ? 'sort_selected' : '' }>
              A-Z
            </span>
          </a>
          <a className="dropdown-item" role="button" onClick={() => this.sortTask('name', -1)}>
            <i className="fa fa-sort-alpha-desc"></i>
            <span className={(sort.by === 'name' && sort.value === -1) ? 'sort_selected' : '' }>
              Z-A
            </span>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" role="button" onClick={() => this.sortTask('status', 1)}>
            Status: <span className="badge badge-success">Enable</span>
            <span className={(sort.by === 'status' && sort.value === 1) ? 'sort_selected' : '' }></span>
          </a>
          <a className="dropdown-item" role="button" onClick={() => this.sortTask('status', -1)}>
            Status: <span className="badge badge-danger">Disable</span>
            <span className={(sort.by === 'status' && sort.value === -1) ? 'sort_selected' : '' }></span>
          </a>
        </div>
      </div>
    );
  }
  /* jshint ignore:end */
}

const mapStateToProps = state => {
  return {
    sort: state.sortTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortTask: sort => {
      return dispatch(actions.sortTask(sort));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);