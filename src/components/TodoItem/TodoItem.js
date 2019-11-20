import React from 'react';
import '../../assets/styles/TodoItem.css';

function TodoItem(cont) {
  
  const taskDoneStyle = {
    fontStyle: "italic",
    color: "green",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">  
      <input
        className="todo-check"
        type="checkbox"
        checked={cont.item.isDone} 
        onChange={() => cont.onTaskStatusChange(cont.item.id)}
      />
      <div className="todo-text" style={cont.item.isDone ? taskDoneStyle: null}>{cont.item.title}</div>
      <input
        className="todo-edit"
        type="button"
        value="Edit"
        onClick={() => cont.onTaskEdit(cont.item.id)}
      />      
      <input
        className="todo-delete"
        type="button"
        value="Del"
        onClick={() => cont.onTaskDelete(cont.item.id)}
      />
    </div>
  );
}

export default TodoItem;