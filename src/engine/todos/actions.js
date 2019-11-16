// Types
import { types } from './types';
// Helpers
import { actionCreator } from '../../lib/helpers';

// Здесь описываем функции которые будут генерировать action
export const actions = Object.freeze({
  addTodo(todo) {
    // Можно истользовать helper функцию которая генерирует action
    return actionCreator(types.ADD_TODO, todo);
  },
});
