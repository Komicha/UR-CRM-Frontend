import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string | number;
  title: string;
  description: string;
  userId: string;
  selectedUser: string;
  status: string;
}

export interface Tasks {
  tasks: Array<{
    id: string | number;
    title: string;
    description: string;
    userId: string;
    selectedUser: string;
    status: string;
  }>;
  selectedUser: string;
}

const initialState: Tasks = {
  tasks: [
    {
      id: 1,
      title: "Тестовая задача",
      description: "Тестовая задача для проверки тестовых задач",
      userId: "123",
      selectedUser: "123",
      status: "fullfill",
    },
  ],
  selectedUser: "",
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        userId: action.payload.userId,
        selectedUser: action.payload.selectedUser,
        status: action.payload.status,
      });
    },
    selectUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { addTask, selectUser } = tasksSlice.actions;

export default tasksSlice.reducer;
