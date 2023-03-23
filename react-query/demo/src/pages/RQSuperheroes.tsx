import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorPreview from '../components/ErrorPreview';
import useSuperheroes, { useAddSuperhero } from '../hooks/useSuperheroes';
import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import Superhero from '../types/superhero.types';

const RQSuperheroes = () => {
  const id = useId();
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const { superheroes, isLoading, isError, error } = useSuperheroes();
  const {
    mutate: addSuperheroMutation,
    isLoading: isLoadingAdding,
    isError: isErrorAdding,
    error: errorAdding,
  } = useAddSuperhero({
    onSuccess: () => {
      setName('');
      setAlterEgo('');
    },
  });

  if (isError || isErrorAdding) {
    return <ErrorPreview error={error ?? errorAdding} />;
  }

  const addSuperhero = () => {
    if (isLoadingAdding) return;
    if (superheroes === undefined) {
      throw new Error(
        `Cannot add superhero ${name}. Unable to get next id, superheroes are undefined.`
      );
    }

    const superhero: Superhero = {
      id: superheroes.length + 1,
      name,
      alterEgo,
    };

    addSuperheroMutation(superhero);
  };

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">
        {isLoading ? 'Loading...' : 'RQ Super Heroes'}
      </h2>
      <form
        className="mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          addSuperhero();
        }}
      >
        <div className="mb-2 flex flex-col gap-0.5">
          <label htmlFor={`name-${id}`}>Name</label>
          <input
            type="text"
            id={`name-${id}`}
            className="rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor={`alter-ego-${id}`}>Alter Ego</label>
          <input
            type="text"
            id={`alter-ego-${id}`}
            className="rounded p-2"
            value={alterEgo}
            onChange={(e) => setAlterEgo(e.target.value)}
          />
        </div>
        <button className="btn mt-4">Add Superhero</button>
        {isLoadingAdding && <div>Adding hero...</div>}
      </form>
      <ul>
        {superheroes?.map((hero) => (
          <li key={hero.id}>
            <Link to={`/rq-superheroes/${hero.id}`} className="flex gap-1">
              <div>{hero.name}</div>
              <ArrowLongRightIcon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperheroes;
