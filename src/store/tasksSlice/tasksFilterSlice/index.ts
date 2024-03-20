import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Filter {
  value: string;
}

const initialState: Filter = {
  value: "pause",
};

export const tasksFilterSlice = createSlice({
  name: "tasksFilterSlice",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = tasksFilterSlice.actions;

export default tasksFilterSlice.reducer;
