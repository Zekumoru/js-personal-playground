import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Repo } from '../../types';

const initialState = {
  loading: false,
  repos: [] as Repo[],
  error: null as null | SerializedError,
};

const fetchRepos = createAsyncThunk('repo/fetchRepos', async () => {
  return (await axios.get('https://api.github.com/users/zekumoru/repos'))
    .data as Repo[];
});

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
        state.error = null;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.repos = [];
        state.error = action.error;
      });
  },
});

const repoReducer = repoSlice.reducer;
export default repoReducer;
export { fetchRepos };
