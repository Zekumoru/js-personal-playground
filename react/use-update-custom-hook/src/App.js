import { useState } from 'react';
import useDidMount from './useDidMount';
import useDidUpdate from './useDidUpdate';
import useWillUnmount from './useWillUnmount';

function App() {
  const [input, setInput] = useState('');

  useDidMount(() => {
    console.log('I am mimicking componentDidMount');
  });

  useWillUnmount(() => {
    console.log('I am mimicking componentWillUnmount');
  });

  useDidUpdate(() => {
    console.log('I am mimicking componentDidUpdate');
  });

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
