import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>React Review apps</h1>
      <p>Select one of the apps:</p>
      <ul>
        <li>
          <Link to="router-app">Router App</Link>
        </li>
        <li>
          <Link to="context-app">Context App</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
