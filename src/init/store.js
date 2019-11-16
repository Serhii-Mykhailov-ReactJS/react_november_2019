// Core
import { createStore, applyMiddleware, compose } from 'redux';
// Reducers
import { rootReducer } from '../init/rootReducer';
// MiddleWares
import { dev, middleware } from './middlewares';

// Добавляем поддержку девтулзов в браузере
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru
// Позволяет просматривать текущее состояние store в реальном времени
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// Буквально пару слов о compose
// https://redux.js.org/api/compose
const composeEnhancers = dev && devtools ? devtools : compose;

// Инициализируем глобальный store
// https://redux.js.org/api/createstore
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export { store };
