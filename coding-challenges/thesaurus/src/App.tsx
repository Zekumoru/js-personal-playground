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

  const fetchSynonyms = async (word: string) => {
    setLoading(true);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/words?rel_syn=${word}`
    );
    const data = response.data;

    setSynonyms(data as Synonym[]);
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSynonyms(input);
  };

  const handleItemClick = (word: string) => {
    setInput(word);
    fetchSynonyms(word);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button disabled={loading}>Find synonyms</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {synonyms.map((synonym) => (
            <li
              key={synonym.word}
              onClick={handleItemClick.bind(undefined, synonym.word)}
            >
              {synonym.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
