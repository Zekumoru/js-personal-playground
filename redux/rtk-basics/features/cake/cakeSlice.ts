import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

const cakeReducer = cakeSlice.reducer;

export default cakeReducer;
export const cakeActions = cakeSlice.actions;
