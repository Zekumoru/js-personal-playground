import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import Superhero from '../types/superhero.types';

const fetchSuperhero = async (
  idOrQueryKey: number | QueryFunctionContext
): Promise<Superhero> => {
  const id =
    typeof idOrQueryKey === 'number' ? idOrQueryKey : idOrQueryKey.queryKey[1];
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/superheroes/${id}`
  );

  return response.data as Superhero;
};

export default fetchSuperhero;
