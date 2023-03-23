import { useQuery } from 'react-query';
import fetchSuperheroes from '../api/fetchSuperheroes';
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

export default useSuperheroes;
