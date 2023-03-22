import axios from 'axios';
import { useEffect, useState } from 'react';
import ErrorPreview from '../components/ErrorPreview';
import Superhero from '../types/superhero.types';

const Superheroes = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/superheroes`
      );

      setError('');
      setSuperheroes(response.data);
    } catch (error) {
      setError(error);
      setSuperheroes([]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <ErrorPreview error={error} />;
  }

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">
        {isLoading ? 'Loading...' : 'Super Heroes'}
      </h2>
      <ul>
        {superheroes.map((hero) => (
          <li key={hero.name}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Superheroes;
