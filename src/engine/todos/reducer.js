// Types
import { types } from './types';

// Начальное состояние редюсера
// Для каждого редюсера начальное состояние своё
// https://redux.js.org/basics/reducers
const initialState = {
  todos: [{ 'abc': 'abc' }],
  todoItem: {
    pending: false,
    data: {},
  },
  isLoading: false,
};

/**
 * Объект action
 *
 * @typedef {Object} Action
 * @property {string} action.type - Тип action. Как правило это строкавая константа
 * @property {*} action.payload - The action payload. Все что угодно. Параметр не обязательный
 */

/**
 * Редюсер - это обычная функция, которая принемает state и объект action
 *
 * @param state - Whatever you want.
 * @param {Action} action - Объект action
 * */
export function todosReducer(state = initialState, action) {
  // Объект action обязательно содержит поле type
  const { type, payload } = action;

  // Проверяем тип action
  switch (type) {
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    case types.ADD_TODO: {
      // Здесь описываем логику изменения состояния для каждого action
      const todosCopy = [...state.todos];
      todosCopy.push(payload);

      // Не мутируем состояние, всегда возвращаем новое
      return {
        ...state,
        todos: todosCopy,
      };
    }

    default:
      // Всегда возвращаем состояние
      return state;
  }
}
