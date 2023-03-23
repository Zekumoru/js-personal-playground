import { useMutation, useQueryClient } from 'react-query';
import addSuperhero from '../api/addSuperhero';
import Superhero from '../types/superhero.types';

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

export default useAddSuperhero;
