// Core
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export function getTodoData() {
  return instance('/posts')
    .then(res => res.data);
}

export function addNewTask(value) {
  return instance.post('/posts', {
    title: value,
    isDone: false
  })
    .then(res => res.data);
}

export function changeCurTaskStatus(id, isDone) {
  return instance.patch(`/posts/${id}`, { isDone })
    .then(res => res.data);
}

export function deleteCurrentTask(cont, id) {
  axios.delete(`/posts/${id}`)
    .then(() => {
      cont.setState({
        todos: [...cont.state.todos.filter(todo => todo.id !== id)]
      })
    });
}
