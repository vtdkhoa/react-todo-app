import React, { Component } from 'react';
import TaskItems from './TaskItems';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskList extends Component {
  /* jshint ignore:start */
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    };
  }

  // TODO: record all events when filter inside stable
  recordEvents = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    };
    this.props.onFilterTable(filter);
    this.setState({
      // NOTE: Multi inputs
      [name]: value
    });
  }

  render() {
    let {tasks, filterTable, keyword, sort} = this.props;
    // begin: filter task inside table
    // TODO: filter name
    if(filterTable.name) {
      tasks = tasks.filter(task => {
        // NOTE: include lower case words
        return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1 ;
      });
    }
    // TODO: filter status
    tasks = tasks.filter(task => {
      if(filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });
    // end: filter task inside table

    // begin: filter task outside table
    // TODO: search keyword
    tasks = tasks.filter(task => {
      // NOTE: include lower case and just only search for task name
      return Object.keys(task).some(element => {
        return task[element].toString().toLowerCase().indexOf(keyword) !== -1;
      });
    });
    /**
     * TODO: sort filter
     * NOTE: If sort.by is 'name' => sort task name. Opposite, sort task status
     */
    if(sort.by === 'name') {
      tasks.sort((a, b) => {
        // NOTE: 1 => [A-Za-z] || -1 => [Z-Az-a]
        if(a.name > b.name) return sort.value;
        else if(a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        // NOTE: 1 => Enable || -1 => Disable
        if(a.status > b.status) return -sort.value;
        else if(a.status < b.status) return sort.value;
        else return 0;
      });
    }
    // end: filter task outside table
    const elementTasks = tasks.map((task, index) => {
      return (
        <TaskItems key={task.id} index={index} task={task}/>
      );
    });

    return(
      <div className="col mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td className="text-center">Order</td>
              <td className="text-center">Task name</td>
              <td className="text-center">Status</td>
              <td className="text-center">Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={this.filterName}
                  onChange={this.recordEvents}
                  placeholder="Search..."
                />
              </td>
              <td>
                <select className="form-control" name="filterStatus" value={this.filterStatus} onChange={this.recordEvents}>
                  <option className="font-weight-bold text-primary" value={-1}>All</option>
                  <option className="font-weight-bold text-danger" value={0}>Disable</option>
                  <option className="font-weight-bold text-success" value={1}>Enable</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elementTasks}
          </tbody>
        </table>
      </div>
    );
  }
  /* jshint ignore:end */
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.searchTask,
    sort: state.sortTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterTable: filter => {
      return dispatch(actions.filterTask(filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);