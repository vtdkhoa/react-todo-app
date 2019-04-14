import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';

class TaskControls extends Component {
  /* jshint ignore:start */
  render() {
    return(
      <div className="row">
        {/* Search */}
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3">
          <TaskSearchControl/>
        </div>
        {/* Sort */}
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3">
          <TaskSortControl/>
        </div>
      </div>
    );
  }
  /* jshint ignore:end */
}

export default TaskControls;