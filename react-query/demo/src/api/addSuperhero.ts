import Superhero from '../types/superhero.types';
import JsonDbApi from './JsonDbApi';

const addSuperhero = async (superhero: Superhero): Promise<Superhero> => {
  const response = await JsonDbApi.post('/superheroes', superhero);
  return response.data as Superhero;
};

export default addSuperhero;
