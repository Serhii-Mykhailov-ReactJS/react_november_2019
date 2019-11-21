// Core
import React, { useCallback } from 'react';
import cx from 'classnames';
// Styles
import '../../assets/styles/TodoItem.css';

function TodoItem(props) {
  const {
    item, onTaskStatusChange, onTaskEdit, onTaskDelete,
  } = props;

  const { id, isDone, title } = item;

  const taskDoneStyle = {
    fontStyle: 'italic',
    color: 'green',
    textDecoration: 'line-through',
  };

  const todoTextClassNames = cx('todo-text', {
    '??': isDone,
  });

  const changeStatusHandler = useCallback(() => {
    onTaskStatusChange(id, !isDone);
  }, [onTaskStatusChange, id, isDone]);

  // TODO: () => onTaskEdit(id);
  // TODO: () => onTaskDelete(id);

  return (
    <div className="todo-item">
      <input
        className="todo-check"
        type="checkbox"
        checked={isDone}
        onChange={changeStatusHandler}
      />
      <div className={todoTextClassNames} style={isDone ? taskDoneStyle: null}>
        {title}
      </div>
      <input
        className="todo-edit"
        type="button"
        value="Edit"
        onClick={() => onTaskEdit(id)}
      />
      <input
        className="todo-delete"
        type="button"
        value="Del"
        onClick={() => onTaskDelete(id)}
      />
    </div>
  );
}

export default TodoItem;
