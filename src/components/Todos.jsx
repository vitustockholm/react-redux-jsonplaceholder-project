import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  todosRequest,
  todosSuccess,
  todosFail,
} from '../redux/actions/todosActions';
import axios from 'axios';

const Todos = () => {
  // Hooks
  // -- state
  const [showTodos, setShowTodos] = useState(false);

  const todosData = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const { todos, loading, error } = todosData;

  // refs
  const dataReceivedRef = useRef(false);

  // Custom functions
  const showTodosData = async () => {
    if (dataReceivedRef.current) {
      setShowTodos(true);
      return;
    }

    try {
      dispatch(todosRequest());

      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      dispatch(todosSuccess(data));
      setShowTodos(true);

      dataReceivedRef.current = true;
    } catch (error) {
      dispatch(todosFail(error.message));

      dataReceivedRef.current = true;
    }
  };
  const hideTodosData = () => setShowTodos(false);

  return (
    <div>
      <div>
        {showTodos ? (
          loading ? (
            <p>Loading</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div>
              <button onClick={hideTodosData}>Close Todos</button>
              <div>
                {todos.map((todo) => (
                  <ul key={todo.id}>
                    <li>{todo.title}</li>
                  </ul>
                ))}
              </div>
            </div>
          )
        ) : (
          <button onClick={showTodosData}>Show Todos</button>
        )}
      </div>
    </div>
  );
};

export default Todos;
