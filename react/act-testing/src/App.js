import { useEffect, useState } from 'react';

console.color = (colorNumber, text) => {
  console.log(`\u001b[${colorNumber}m${text}\u001b[0m`);
};

function App() {
  const [count, setCount] = useState(0);
  console.color(95, 'render');

  const handleClick = () => {
    setCount((count) => {
      console.color(92, 'set');

      return count + 1;
    });
  };

  useEffect(() => {
    console.color(93, 'on effect call');
  });

  useEffect(() => {
    console.color(93, `current count is ${count}`);
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
