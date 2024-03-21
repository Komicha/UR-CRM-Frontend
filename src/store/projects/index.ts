import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Project {
    id: number;
    title: string;
    user_id: number;
}

interface ProjectsState {
    loading: boolean;
    projects: Project[];
    error: string | null;
}

const initialState: ProjectsState = {
    loading: false,
    projects: [],
    error: null
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        fetchProjectsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProjectsSuccess(state, action: PayloadAction<Project[]>) {
            state.loading = false;
            state.projects = action.payload;
            state.error = null;
        },
        fetchProjectsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure } = projectSlice.actions;

export default projectSlice.reducer;
