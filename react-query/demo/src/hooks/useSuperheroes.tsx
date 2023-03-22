import { useQuery, UseQueryResult } from 'react-query';
import fetchSuperheroes from '../api/fetchSuperheroes';
import Superhero from '../types/superhero.types';

type UseSuperheroesProps = {
  onSuccess?: (superheroes: Superhero[]) => void;
  onError?: () => void;
};

type UseSuperheroesResult = Omit<UseQueryResult, 'data'> & {
  superheroes: Superhero[] | undefined;
};

const useSuperheroes = ({
  onSuccess,
  onError,
}: UseSuperheroesProps = {}): UseSuperheroesResult => {
  const { data: superheroes, ...values } = useQuery(
    'superheroes',
    fetchSuperheroes,
    { onSuccess, onError }
  );

  return { superheroes, ...values };
};

export default useSuperheroes;
