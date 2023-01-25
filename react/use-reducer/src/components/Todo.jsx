import React from 'react';
import { ACTIONS } from './App';

function Todo({ todo, dispatch }) {
  const toggle = () => {
    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: todo.id },
    });
  };

  const remove = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  };

  return (
    <li>
      <span
        style={{
          color: todo.complete ? '#aaa' : '#000',
          textDecoration: todo.complete ? 'line-through' : 'none',
        }}
      >
        {todo.name}
      </span>
      <div className="buttons">
        <button onClick={toggle}>Toggle</button>
        <button className="delete" onClick={remove}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
