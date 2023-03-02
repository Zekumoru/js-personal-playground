import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice';

const INITIAL_NUM_OF_ICECREAMS = 20;

const initialState = {
  numOfIcecreams: INITIAL_NUM_OF_ICECREAMS,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload === undefined) {
        state.numOfIcecreams = INITIAL_NUM_OF_ICECREAMS;
        return;
      }

      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

const icecreamReducer = icecreamSlice.reducer;

export default icecreamReducer;
export const icecreamActions = icecreamSlice.actions;
