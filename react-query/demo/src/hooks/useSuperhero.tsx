import { useQuery } from 'react-query';
import fetchSuperhero from '../api/fetchSuperhero';
import UseCustomQueryResult from '../types/custom-usequery.types';
import Superhero from '../types/superhero.types';

const useSuperhero = (
  id: number
): UseCustomQueryResult<'superhero', Superhero> => {
  const { data: superhero, ...values } = useQuery(
    ['superhero', id],
    fetchSuperhero
  );

  return { superhero, ...values };
};

export default useSuperhero;
