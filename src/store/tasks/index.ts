import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskForm {
  title: string;
  description: string;
  userId: string;
  selectedUser: string;
}

export interface Tasks {
  tasks: Array<{
    title: string;
    description: string;
    userId: string;
  }>;
  selectedUser: string;
}

const initialState: Tasks = {
  tasks: [],
  selectedUser: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskForm>) => {
      state.tasks.push({
        title: action.payload.title,
        description: action.payload.description,
        userId: action.payload.userId,
      });
    },
    selectUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { addTask, selectUser } = tasksSlice.actions;

export default tasksSlice.reducer;
