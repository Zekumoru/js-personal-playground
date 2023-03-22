import { QueryFunctionContext } from 'react-query';
import Superhero from '../types/superhero.types';
import JsonDbApi from './JsonDbApi';

const fetchSuperhero = async (
  idOrQueryKey: number | QueryFunctionContext
): Promise<Superhero> => {
  const id =
    typeof idOrQueryKey === 'number' ? idOrQueryKey : idOrQueryKey.queryKey[1];
  const response = await JsonDbApi.get(`/superheroes/${id}`);

  return response.data as Superhero;
};

export default fetchSuperhero;
