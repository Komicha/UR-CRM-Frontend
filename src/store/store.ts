import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./taskCardFilter";
import tasksReducer from "./tasks";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
