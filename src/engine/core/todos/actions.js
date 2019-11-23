// Types
import { types } from './types';
// Helpers
import { actionCreator } from '../../../lib/helpers';

function setLoading(isLoading) {
  // { type: types.SET_LOADING, payload: isLoading }
  return actionCreator(types.SET_LOADING, isLoading);
}

// Здесь описываем функции которые будут генерировать action
export const actions = Object.freeze({
  addTodo(todo) {
    return (dispatch, getState) => {
      const state = getState();
      const loading = state.todos.isLoading;

      setTimeout(() => {
        dispatch(setLoading(!loading));
      }, 3000);

      // TODO: set loading true
      // fetch('/todo')
      //   .then(() => {
      //     // TODO: handle success
      //   })
      //   .catch(() => {
      //     // TODO: handle error
      //   })
      //   .finally(() => {
      //     // TODO: set loading false
      //   });

      dispatch(actionCreator(types.ADD_TODO, todo));
    };
    // Можно истользовать helper функцию которая генерирует action
    // return actionCreator(types.ADD_TODO, todo);
  },
  setTodoList(list) {
    return actionCreator(types.SET_TODOS_LIST, list);
  },
});
