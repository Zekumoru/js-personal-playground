import { useParams } from 'react-router-dom';
import ErrorPreview from '../components/ErrorPreview';
import useSuperhero from '../hooks/useSuperhero';

const RQSuperhero = () => {
  const { heroId } = useParams();
  const { superhero, isLoading, isError, error } = useSuperhero(
    Number(heroId) ?? -1
  );

  if (isError) {
    return <ErrorPreview error={error} />;
  }

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">
        {isLoading ? 'Loading...' : `Superhero Details: ${superhero?.name}`}
      </h2>
      {!isLoading && <p>Alter Ego: {superhero?.alterEgo}</p>}
    </div>
  );
};

export default RQSuperhero;
