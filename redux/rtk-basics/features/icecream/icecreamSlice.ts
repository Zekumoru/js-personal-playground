import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice';

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
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
