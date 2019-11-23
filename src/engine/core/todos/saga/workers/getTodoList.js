// Core
import { put } from 'redux-saga/effects';
// Engine
import Api from '../../../../config/api/api';
import { actions } from '../../actions';

export function* callGetTodoList() {
  const response = yield Api.getTodoList();

  if (response && response.status >= 200 && response.status < 400) {
    const data = response.data;

    yield put(actions.setTodoList(data));
  }
}
