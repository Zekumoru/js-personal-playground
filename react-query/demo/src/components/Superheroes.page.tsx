import axios from 'axios';
import { useEffect, useState } from 'react';
import Superhero from '../types/superhero.types';

const Superheroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/superheroes`
    );
    setSuperheroes(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-2 font-bold text-xl">
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
