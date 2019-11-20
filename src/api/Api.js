import axios from 'axios';

let list = '';

export function getTodoData(cont) {

  list = cont;
  fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => {
      cont.setState({
        todos: data         
      })
    })
}

export function addNewTask(cont, value) {

  axios.post('http://localhost:3000/posts', {
    title: value,
    isDone: false
  })
    .then(data => {
      cont.setState({
        todos: [...cont.state.todos, data],
        value: ''        
      })})
}

export function changeCurTaskStatus(cont, id) {

  axios.patch(`http://localhost:3000/posts/${id}`)
    .then(
      cont.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.isDone = !todo.isDone
          }
          return todo;
        })
        return {
          todos: updatedTodos
        }
      })
    )
}

export function deleteCurrentTask(cont, id) {

  axios.delete(`http://localhost:3000/posts/${id}`)    
    .then(
      cont.setState({
        todos: [...cont.state.todos.filter(todo => todo.id !== id)]
      })
    )
}