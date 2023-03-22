import { useQuery } from 'react-query';
import fetchSuperheroes from '../api/fetchSuperheroes';

const RQSuperheroes = () => {
  const { data: superheroes, isLoading } = useQuery(
    'superheroes',
    fetchSuperheroes
  );

  return (
    <div className="p-4">
      <h2 className="mb-2 font-bold text-xl">
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
