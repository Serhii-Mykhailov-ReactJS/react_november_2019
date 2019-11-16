// Core
import { combineReducers } from 'redux';
// Reducers
import { todosReducer } from '../engine/todos/reducer';

// Инициализируем главный редюсер
// Сюда добавляем все редюсеры нашего приложения
// https://redux.js.org/api/combinereducers
const rootReducer = combineReducers({
  todos: todosReducer,
});

export { rootReducer };
