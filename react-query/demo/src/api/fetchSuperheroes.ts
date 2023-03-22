import Superhero from '../types/superhero.types';
import JsonDbApi from './JsonDbApi';

const fetchSuperheroes = async () => {
  const response = await JsonDbApi.get('superheroes');

  return response.data as Superhero[];
};

export default fetchSuperheroes;
