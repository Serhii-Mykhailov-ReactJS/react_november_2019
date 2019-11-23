// Core
import { all, takeEvery } from 'redux-saga/effects';
// Types
import { asyncTypes } from './asyncTypes';
// Workers
import {
  callGetTodoList,
} from './workers';

function* watchGetTodos() {
  yield takeEvery(asyncTypes.GET_TODO_LIST_ASYNC, callGetTodoList);
}
function* watchSomethingElse() {
  yield takeEvery('OLOLO', () => {});
}

export function* watchersTodos() {
  yield all([
    watchGetTodos(),
    watchSomethingElse(),
  ]);
}
