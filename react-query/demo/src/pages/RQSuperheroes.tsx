import { Link } from 'react-router-dom';
import ErrorPreview from '../components/ErrorPreview';
import useSuperheroes from '../hooks/useSuperheroes';
import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';

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
          <li key={hero.name}>
            <Link to={`/rq-superheroes/${hero.id}`} className="flex gap-1">
              <div>{hero.name}</div>
              <ArrowLongRightIcon className="w-6 h-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperheroes;
