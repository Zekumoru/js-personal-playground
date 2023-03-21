import { useState } from 'react';
import axios from 'axios';

type Synonym = {
  word: string;
  score: number;
};

function App() {
  const [input, setInput] = useState('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSynonyms = async () => {
    setLoading(true);

    const response = await axios.get(
      `https://api.datamuse.com/words?rel_syn=${input}`
    );
    const data = response.data;

    setSynonyms(data as Synonym[]);
    setLoading(false);
  };

  const handleClick = () => {
    fetchSynonyms();
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleClick} disabled={loading}>
        Find synonyms
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {synonyms.map((synonym) => (
            <li key={synonym.word}>{synonym.word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
