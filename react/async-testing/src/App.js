import { useEffect, useState } from 'react';
import User from './components/User';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    try {
      const user = await (
        await fetch('https://jsonplaceholder.typicode.com/users/1')
      ).json();
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => fetchUser() && undefined, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">{user ? <User user={user} /> : <p>Loading...</p>}</div>
  );
}

export default App;
