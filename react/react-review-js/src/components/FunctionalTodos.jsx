import { useState } from 'react';
import PropTypes from 'prop-types';

const FunctionalTodos = ({ name }) => {
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, input]);
    setInput('');
  };

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

FunctionalTodos.propTypes = {
  name: PropTypes.string,
};

export default FunctionalTodos;
