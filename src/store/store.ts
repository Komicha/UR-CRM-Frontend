import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./tasksSlice/tasksFilterSlice";
import tasksReducer from "./tasksSlice";
import projectReducer from './projects';

export const store = configureStore({
  reducer: {
    filterState: filterReducer,
    tasksState: tasksReducer,
    projects: projectReducer,
  }
}
)
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
