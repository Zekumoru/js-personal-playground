import {
  useQuery,
  useMutation,
  MutationFunction,
  useQueryClient,
} from 'react-query';
import fetchSuperheroes from '../api/fetchSuperheroes';
import JsonDbApi from '../api/JsonDbApi';
import UseCustomQueryResult from '../types/custom-usequery.types';
import Superhero from '../types/superhero.types';

type UseSuperheroesProps = {
  onSuccess?: (superheroes: Superhero[]) => void;
  onError?: () => void;
};

const useSuperheroes = ({
  onSuccess,
  onError,
}: UseSuperheroesProps = {}): UseCustomQueryResult<
  'superheroes',
  Superhero[]
> => {
  const { data: superheroes, ...values } = useQuery(
    'superheroes',
    fetchSuperheroes,
    { onSuccess, onError }
  );

  return { superheroes, ...values };
};

const addSuperhero = async (superhero: Superhero): Promise<Superhero> => {
  const response = await JsonDbApi.post('/superheroes', superhero);
  return response.data as Superhero;
};

type useAddSuperheroProps = {
  onSuccess?: (superhero: Superhero) => void;
  onError?: () => void;
};

const useAddSuperhero = ({ onSuccess, onError }: useAddSuperheroProps = {}) => {
  const queryClient = useQueryClient();
  return useMutation(addSuperhero, {
    onSuccess: (superhero) => {
      queryClient.setQueryData<Superhero[]>('superheroes', (superheroes) => {
        return [...(superheroes ?? []), superhero];
      });
      onSuccess?.(superhero);
    },
    onError,
  });
};

export default useSuperheroes;
export { useAddSuperhero };
