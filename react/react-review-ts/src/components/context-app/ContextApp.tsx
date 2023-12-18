import { Link } from 'react-router-dom';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';

const ContextApp = () => {
  return (
    <div>
      <CounterProvider>
        <h1>Context App</h1>
        <Counter />
        <Link to="/">Go back to main page</Link>
      </CounterProvider>
    </div>
  );
};

export default ContextApp;
