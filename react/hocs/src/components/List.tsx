import type { Repo } from '../types';

export interface ListProps {
  repos?: Repo[];
}

type ListPropTypes = ListProps & React.PropsWithChildren;

const List = ({ repos }: ListPropTypes) => {
  if (repos === undefined) return null;
  if (repos.length === 0) return <p>No repos, sorry.</p>;

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>{repo.full_name}</li>
      ))}
    </ul>
  );
};

export default List;
