import { nanoid } from 'nanoid';
import { useReducer, useState } from 'react';
import Todo from './Todo';
import '../styles/App.css';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};

const todosReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        {
          id: nanoid(),
          name: action.payload.name,
          complete: false,
        },
      ];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return { ...todo, complete: !todo.complete };
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

function App() {
  const [todos, dispatchTodos] = useReducer(todosReducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTodos({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul className="todos">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatchTodos} />
        ))}
      </ul>
    </div>
  );
}

export default App;
export { ACTIONS };
