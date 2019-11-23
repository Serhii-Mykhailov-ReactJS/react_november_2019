export const todosSelectors = Object.freeze({
  todoList: state => state.todos.todos || [],
});
