import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { getTodoData, deleteCurrentTask, changeCurTaskStatus } from '../../api/Api';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.onTaskStatusChange = this.onTaskStatusChange.bind(this);
    this.onTaskEdit = this.onTaskEdit.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
  }

  componentDidMount() {
    this.getTodoDataAsync();
  }

  getTodoDataAsync = () => {
    const { getTodos } = this.props;
    getTodos();
  };

  onTaskStatusChange(id, data) {
    changeCurTaskStatus(id, data)
      .then((data) => {
        const { id } = data;
        // copy todo
        // find index
        // add new todo
        // setState
      });
  }

  onTaskEdit(id) {
    console.log("Task Edited:", id);
  }

  onTaskDelete(id) {
    deleteCurrentTask(this, id);
  }

  renderTodoItems = () => {
    const { todos } = this.props;
    return todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        onTaskStatusChange={this.onTaskStatusChange}
        onTaskEdit={this.onTaskEdit}
        onTaskDelete={this.onTaskDelete}
      />
    ));
  };

  render() {
    return (
      <div className="todo-list">
        {this.renderTodoItems()}
      </div>
    );
  }
}

export default ListComponent;
