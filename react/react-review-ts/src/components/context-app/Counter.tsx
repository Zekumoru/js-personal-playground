import { useCounter } from './CounterContext';

const Counter = () => {
  const [state, dispatch] = useCounter();

  const handleIncrement = () => {
    dispatch({ type: 'increase', payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrease', payload: 1 });
  };

  return (
    <div>
      <p>Current timer: {state.count}</p>
      <button onClick={handleIncrement}>Increment by 1</button>
      <button onClick={handleDecrement}>Decrement by 1</button>
    </div>
  );
};

export default Counter;
