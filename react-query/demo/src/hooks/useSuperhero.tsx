import { useQuery, useQueryClient } from 'react-query';
import fetchSuperhero from '../api/fetchSuperhero';
import UseCustomQueryResult from '../types/custom-usequery.types';
import Superhero from '../types/superhero.types';

const useSuperhero = (
  id: number
): UseCustomQueryResult<'superhero', Superhero> => {
  const queryClient = useQueryClient();
  const { data: superhero, ...values } = useQuery(
    ['superhero', id],
    fetchSuperhero,
    {
      initialData: () => {
        const superhero = queryClient
          .getQueryData<Superhero[]>('superheroes')
          ?.find((superhero) => superhero.id === id);

        return superhero;
      },
    }
  );

  return { superhero, ...values };
};

export default useSuperhero;
