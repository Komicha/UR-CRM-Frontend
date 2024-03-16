import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./tasks/taskCardFilter";
import tasksReducer from "./tasks";

export const store = configureStore({
  reducer: {
    filterState: filterReducer,
    tasksState: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
