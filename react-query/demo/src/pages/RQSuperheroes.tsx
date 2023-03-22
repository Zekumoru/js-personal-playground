import { useQuery } from 'react-query';
import fetchSuperheroes from '../api/fetchSuperheroes';
import ErrorPreview from '../components/ErrorPreview';

const RQSuperheroes = () => {
  const {
    data: superheroes,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery('superheroes', fetchSuperheroes, { enabled: false });

  if (isError) {
    return <ErrorPreview error={error} />;
  }

  return (
    <div className="p-4">
      <h2 className="mb-2 font-bold text-xl">RQ Super Heroes</h2>
      <button className="btn mb-2" onClick={() => refetch()}>
        Fetch Superheroes
      </button>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
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
