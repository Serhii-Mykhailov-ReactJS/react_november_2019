// Core
import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [searchString, setSearchString] = useState('');

  function onChangeHandler(ev) {
    setSearchString(ev.target.value);
  }

  const getTodos = useCallback(() => {
    http.get('people')
      .then(res => res.data)
      .then((data) => {
        const { results } = data;
        setTodos(results);
      });
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const memoizedTodos = useMemo(() => {
    if (!searchString) {
      return todos;
    }
    return todos.filter(({ name }) => {
      return name.toLowerCase().includes(searchString.toLowerCase());
    });
  }, [searchString]);

  return (
    <>
      <input
        onChange={onChangeHandler}
        value={searchString}
      />
      <ul>
        {memoizedTodos.map(item => (
          <li key={item.created}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoComponent;
