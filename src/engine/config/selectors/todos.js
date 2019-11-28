// Core
import { createSelector } from 'reselect';

const todosSelector = state => state.todos.todos;

const todosDoneSelector = createSelector(
  todosSelector,
  (todos) => {
    return todos.filter(item => item.done);
  },
);

const firstNameSelector = state => state.user.firstName;
const lastNameSelector = state => state.user.lastName;

const fullNameSelector = createSelector(
  firstNameSelector,
  lastNameSelector,
  (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  },
);

export const todosSelectors = Object.freeze({
  todoList: state => state.todos.todos || [],
});
