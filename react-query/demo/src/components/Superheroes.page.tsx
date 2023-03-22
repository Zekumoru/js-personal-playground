import axios from 'axios';
import { useEffect, useState } from 'react';
import Superhero from '../types/superhero.types';

const Superheroes = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/superheroes`
      );

      setError('');
      setSuperheroes(response.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : (error as string));
      setSuperheroes([]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-2 font-bold text-xl">
        {isLoading ? 'Loading...' : error || 'Super Heroes'}
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
