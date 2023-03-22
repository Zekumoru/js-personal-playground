import ErrorPreview from '../components/ErrorPreview';
import useSuperheroes from '../hooks/useSuperheroes';

const RQSuperheroes = () => {
  const { superheroes, isLoading, isError, error } = useSuperheroes();

  if (isError) {
    return <ErrorPreview error={error} />;
  }

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">
        {isLoading ? 'Loading...' : 'RQ Super Heroes'}
      </h2>
      <ul>
        {superheroes?.map((hero) => (
          <li key={hero.name}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperheroes;
