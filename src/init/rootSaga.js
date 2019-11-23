// Core
import { all, call } from 'redux-saga/effects';
// Workers
import { watchersTodos } from '../engine/core/todos/saga/watchers';

export function* rootSaga() {
  // TODO: add more watchers;
  yield all([
    call(watchersTodos),
  ]);
}
