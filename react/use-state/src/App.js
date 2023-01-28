import { useEffect, useState } from 'react';

const db = {
  data: {},
  get(key) {
    console.log("I'm getting called!");
    return this.data[key];
  },
  set(key, value) {
    this.data[key] = value;
  },
};

window.logData = () => {
  console.log(db.data);
};

function App() {
  const [input, setInput] = useState(() => {
    return db.get('input') ?? '';
  });

  useEffect(() => {
    db.set('input', input);
  }, [input]);

  return (
    <div className="App">
      <p>{input}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
