import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./tasksSlice/tasksFilterSlice";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasksFilterReducer: filterReducer,
    tasksReducer: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
