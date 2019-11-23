// Core
import React from 'react';
// Hooks
import { useTodoList } from './hooks';

function Todos() {
  const todoList = useTodoList();

  return (
    <ul>
      {todoList.map(todoItem => (
        <li key={todoItem.id}>{todoItem.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
