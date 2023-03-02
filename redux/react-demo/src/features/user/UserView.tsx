import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDisptach, IRootState } from '../../app/store';
import { fetchUsers } from './userSlice';

const UserView = () => {
  const dispatch = useDispatch<AppDisptach>();
  const { loading, users, error } = useSelector(
    (state: IRootState) => state.user
  );

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
