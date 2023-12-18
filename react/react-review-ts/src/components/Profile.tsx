import { Link, useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from Profile page!</h1>
      <p>So, how are you?</p>

      <hr />

      <h2>
        The profile visited here is:{' '}
        <span
          style={{
            textTransform: 'capitalize',
          }}
        >
          {name}
        </span>
      </h2>

      <Link to="/router-app">Go back to Router App page</Link>
      <br />
      <Link to="/">Go back to main page</Link>
    </div>
  );
};

export default Profile;
