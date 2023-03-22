import { useQuery } from 'react-query';
import fetchSuperheroes from '../api/fetchSuperheroes';

const RQSuperheroes = () => {
  const {
    data: superheroes,
    isLoading,
    isError,
    error,
  } = useQuery('superheroes', fetchSuperheroes);

  return (
    <div className="p-4">
      <h2 className="mb-2 font-bold text-xl">
        {isError
          ? error instanceof Error
            ? error.message
            : (error as string)
          : isLoading
          ? 'Loading...'
          : 'RQ Super Heroes'}
      </h2>
      {isError || (
        <ul>
          {superheroes?.map((hero) => (
            <li key={hero.name}>{hero.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RQSuperheroes;
