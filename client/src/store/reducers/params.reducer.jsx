import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  urlParams: {},
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.urlParams = action.payload;
    },
  },
});

export const { setParams } = paramsSlice.actions;

export default paramsSlice.reducer;