import { useQueries } from 'react-query';
import fetchSuperhero from '../api/fetchSuperhero';

type DynamicParallelProps = {
  heroesIds: number[];
};

const DynamicParallel = ({ heroesIds }: DynamicParallelProps) => {
  const queryResults = useQueries(
    heroesIds.map((heroId) => ({
      queryKey: ['superhero', heroId],
      queryFn: fetchSuperhero,
    }))
  );
  return (
    <div className="p-4">
      <ul>
        {queryResults.map(({ data: superhero }) => (
          <li>
            {superhero?.name} ({superhero?.alterEgo})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicParallel;
