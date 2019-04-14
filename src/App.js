import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControls from './components/TaskControls';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  /* jshint ignore:start */
  // TODO: toggle form (close/open form)
  toggleForm = () => {
    let {taskEdit} = this.props;
    if(taskEdit && taskEdit.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  // NOTE: save tasks into Local storage
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks
      });
    }
  }

  render() {
    let {isDisplayForm} = this.props;
    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management</h1><hr/>
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            <TaskForm/>
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col'}>
            <button type="button" className="btn btn-primary" onClick={this.toggleForm}>
              <i className="fa fa-plus"></i>&nbsp;Add Task
            </button>&nbsp;
            <TaskControls/>
            <div className="row">
              <TaskList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  /* jshint ignore:end */
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEdit: state.taskEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleForm: () => {
      return dispatch(actions.toggleForm());
    },
    onOpenForm: () => {
      return dispatch(actions.openForm());
    },
    onClearTask: task => {
      return dispatch(actions.editTask(task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);