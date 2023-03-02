import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_NUM_OF_CAKES = 10;

const initialState = {
  numOfCakes: INITIAL_NUM_OF_CAKES,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload === undefined) {
        state.numOfCakes = INITIAL_NUM_OF_CAKES;
        return;
      }

      state.numOfCakes += action.payload;
    },
  },
});

const cakeReducer = cakeSlice.reducer;

export default cakeReducer;
export const cakeActions = cakeSlice.actions;
