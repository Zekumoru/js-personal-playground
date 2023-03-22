import axios from 'axios';
import Superhero from '../types/superhero.types';

const fetchSuperheroes = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/superheroes`
  );

  return response.data as Superhero[];
};

export default fetchSuperheroes;
