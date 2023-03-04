import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from './userSlice';

const UserView = () => {
  const dispatch = useAppDispatch();
  const { loading, users, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error.message}</div>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserView;
