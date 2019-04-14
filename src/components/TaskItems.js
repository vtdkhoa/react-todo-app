import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskItems extends Component {
  /* jshint ignore:start */
  // TODO: update status (toggle status)
  toggleStatus = () => {
    this.props.onToggleStatus(this.props.task.id);
  }

  // TODO: delete task
  deleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  }

  // TODO: edit task (update task)
  editTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  }

  render() {
    let {task, index} = this.props;
    return(
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span className={task.status ? 'badge badge-success' : 'badge badge-danger'} onClick={this.toggleStatus}>
            {task.status ? 'Enable' : 'Disable'}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-info text-white" onClick={this.editTask}>
            <i className="fa fa-pencil"></i>&nbsp;
            Edit
          </button>&nbsp;
          <button type="button" className="btn btn-danger text-white" onClick={this.deleteTask}>
            <i className="fa fa-trash"></i>&nbsp;
            Delete
          </button>
        </td>
      </tr>
    );
  }
  /* jshint ignore:end */
}

const mapDispatchToProps = dispatch => {
  return {
    onOpenForm: () => {
      return dispatch(actions.openForm());
    },
    onCloseForm: () => {
      return dispatch(actions.closeForm());
    },
    onDeleteTask: id => {
      return dispatch(actions.deleteTask(id));
    },
    onToggleStatus: id => {
      return dispatch(actions.toggleStatus(id));
    },
    onEditTask: task => {
      return dispatch(actions.editTask(task));
    }
  };
};

export default connect(null, mapDispatchToProps)(TaskItems);