// Helpers
import { actionCreator } from '../../../../lib/helpers/actionCreator';
// Types
import { asyncTypes } from './asyncTypes';

export const asyncActions = Object.freeze({
  getTodoListAsync() {
    return actionCreator(asyncTypes.GET_TODO_LIST_ASYNC);
  },
});
