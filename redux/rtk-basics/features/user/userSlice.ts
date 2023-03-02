import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const initialState = {
  loading: false,
  users: [] as User[],
  error: null as null | SerializedError,
};

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return (response.data as User[]).map(
    (user): User => ({
      id: user.id,
      name: user.name,
    })
  );
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error;
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
export { fetchUsers };
