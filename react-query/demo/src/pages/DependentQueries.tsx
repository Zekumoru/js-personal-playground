import { useQuery } from 'react-query';
import fetchSkills from '../api/fetchSkills';
import fetchUser from '../api/fetchUser';
import ErrorPreview from '../components/ErrorPreview';

type DependentQueriesProps = {
  username: string;
};

const DependentQueries = ({ username }: DependentQueriesProps) => {
  const {
    data: user,
    isError: isErrorUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useQuery(['users', username], fetchUser);

  const skillsId = user?.skillsId;
  const {
    data: skills,
    isError: isErrorSkills,
    error: errorSkills,
  } = useQuery(['skills', skillsId], fetchSkills, {
    enabled: !!skillsId,
  });

  if (isErrorUser || errorSkills) {
    return <ErrorPreview error={errorUser ?? errorSkills} />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">
        {isLoadingUser ? (
          'Loading...'
        ) : (
          <>
            <span className="capitalize">{username}</span>'s Skills
          </>
        )}
      </h2>
      <ul>
        {skills?.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};

export default DependentQueries;
