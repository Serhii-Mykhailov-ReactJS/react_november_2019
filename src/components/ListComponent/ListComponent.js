import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import { getTodoData, deleteCurrentTask, changeCurTaskStatus } from "../../api/Api";

class ListComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    }  
    this.onTaskStatusChange = this.onTaskStatusChange.bind(this);
    this.onTaskEdit = this.onTaskEdit.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
  }  

  componentDidMount() {
    getTodoData(this);
  }

  onTaskStatusChange(id) {
    changeCurTaskStatus(this, id);
  }

  onTaskEdit(id) {
    console.log("Task Edited:", id);
  }

  onTaskDelete(id) {
    deleteCurrentTask(this, id);
  }

  render() {
    const todoItems = this.state.todos.map(item =>
      <TodoItem
        key={item.id}
        item={item}
        onTaskStatusChange={this.onTaskStatusChange}
        onTaskEdit={this.onTaskEdit}        
        onTaskDelete={this.onTaskDelete}
      />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default ListComponent;