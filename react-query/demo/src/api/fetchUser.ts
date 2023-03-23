import { QueryFunctionContext } from 'react-query';
import User from '../types/user.types';
import JsonDbApi from './JsonDbApi';

const fetchUser = async (
  usernameOrQueryKey: string | QueryFunctionContext
): Promise<User> => {
  const username =
    typeof usernameOrQueryKey === 'string'
      ? usernameOrQueryKey
      : usernameOrQueryKey.queryKey[1];
  const response = await JsonDbApi.get(`/users/${username}`);

  return response.data as User;
};

export default fetchUser;
