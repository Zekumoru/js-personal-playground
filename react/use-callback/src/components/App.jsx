import { useCallback, useState } from 'react';
import List from './List';

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = () => {
    return setCount((count) => count + 1);
  };

  const decrement = () => {
    return setCount((count) => {
      if (count <= 0) return count;
      return count - 1;
    });
  };

  // if it weren't for useCallback, createItems
  // will always be a new function which will be
  // passed inside the List component and
  // because of the useEffect watching over this
  // createItems, this will get called even
  // if we aren't changing count
  const createItems = useCallback(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(i);
    }
    return items;
  }, [count]);

  const toggleTheme = () => {
    setDark((dark) => !dark);
  };

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={toggleTheme}>Toggle theme</button>
      <List getItems={createItems} />
    </div>
  );
}

export default App;
