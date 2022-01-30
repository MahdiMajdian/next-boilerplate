import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface TestState {
  name: string;
}

const initialState: TestState = {
  name: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = testSlice.actions;

export default testSlice.reducer;
