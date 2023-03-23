import { useMutation, useQueryClient } from 'react-query';
import addSuperhero from '../api/addSuperhero';
import Superhero from '../types/superhero.types';

type useAddSuperheroProps = {
  onSuccess?: (superhero: Superhero) => void;
  onMutate?: (superhero: Superhero) => void;
  onError?: (error: unknown, superhero: Superhero) => void;
};

const useAddSuperhero = ({
  onSuccess,
  onMutate,
  onError,
}: useAddSuperheroProps = {}) => {
  const queryClient = useQueryClient();

  return useMutation(addSuperhero, {
    onSuccess,
    onMutate: async (superhero) => {
      await queryClient.cancelQueries('superheroes');
      const previousSuperheroes =
        queryClient.getQueryData<Superhero[]>('superheroes');

      queryClient.setQueryData<Superhero[]>('superheroes', (superheroes) => {
        return [...(superheroes ?? []), superhero];
      });

      onMutate?.(superhero);

      return {
        previousSuperheroes,
      };
    },
    onError: (error, superhero, context) => {
      queryClient.setQueryData('superheroes', context?.previousSuperheroes);
      onError?.(error, superhero);
    },
    onSettled: () => {
      queryClient.invalidateQueries('superheroes');
    },
  });
};

export default useAddSuperhero;
