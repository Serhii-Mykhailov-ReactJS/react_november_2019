// Core
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
// Engine
import { asyncActions } from '../../../engine/core/todos/saga/asyncActions';
import { todosSelectors } from '../../../engine/config/selectors';

export function useTodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosSelectors.todoList);

  const getTodosAsync = useCallback(() => {
    dispatch(asyncActions.getTodoListAsync());
  }, [dispatch]);

  useEffect(() => {
    getTodosAsync();
  }, [getTodosAsync]);

  return todoList;
}
