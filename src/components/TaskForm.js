import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
  /* jshint ignore:start */
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    };
  }

  // NOTE: Transform data from table to edit form
  componentWillMount() {
    if(this.props.taskEdit) {
      this.setState({
        id: this.props.taskEdit.id,
        name: this.props.taskEdit.name,
        status: this.props.taskEdit.status
      });
    }
  }

  // NOTE: Transform data from table to edit form and remove after edit form is closed
  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.taskEdit) {
      this.setState({
        id: nextProps.taskEdit.id,
        name: nextProps.taskEdit.name,
        status: nextProps.taskEdit.status
      });
    }
    else if(!nextProps.taskEdit) {
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }

  // TODO: close form
  closeForm = () => {
    this.props.onCloseForm();
  }

  // TODO: clear form
  clearTask = () => {
    this.setState({
      name: '',
      status: false
    });
  }

  // TODO: record all events inside add form
  recordEvents = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if(name === 'status') {
      value = event.target.value === 'true' ? true : false;
    }
    this.setState({
      // NOTE: Multi inputs
      [name]: value
    });
  }

  // TODO: save task into local storage
  submit = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.clearTask();
    this.closeForm();
  }

  render() {
    let {id, name, status} = this.state;
    if(!this.props.isDisplayForm) return null;
    // else
    return(
      <div className="card text-white bg-info">
        <div className="card-header">
          <h3 className="card-title">{id !== '' ? 'Edit task' : 'Add task'}
            <i className="fa fa-times-circle float-right" onClick={this.closeForm}></i>
          </h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.submit}>
            <div className="form-group">
              <label>Task name:</label>
              <input type="text" className="form-control" name="name" value={name} onChange={this.recordEvents}/>
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select className="form-control" name="status" value={status} onChange={this.recordEvents}>
                <option value={true}>Enable</option>
                <option value={false}>Disable</option>
              </select><hr/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-plus"></i>&nbsp;
                Save
              </button>&nbsp;
              <button type="button" className="btn btn-danger" onClick={this.clearTask}>
                <i className="fa fa-times"></i>&nbsp;
                Clear
              </button>
            </div>
          </form>
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
    onSaveTask: task => {
      return dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      return dispatch(actions.closeForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);