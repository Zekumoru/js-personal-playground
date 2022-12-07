import axios from 'axios';
import { Users } from './axios';

jest.mock('axios');

test('should fetch users', async () => {
  const users = [ {name: 'Bob'} ];
  const response = { data: users };
  axios.get.mockImplementation(() => Promise.resolve(response));

  const data = await Users.all();
  expect(data).toBe(users);
});
