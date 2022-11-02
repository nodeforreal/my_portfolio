import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sanityClient from "../../client";

export const getAllProjects = createAsyncThunk(
  "getAllProjects",
  async (_, thunkAPI) => {
    try {
      const projects = await sanityClient.fetch(
        `*[_type == "projects"]{
        _id,
        title,
        tag,
        img,
        description,
        live,
        repo,
        tags
    }
    `
      );
      return thunkAPI.fulfillWithValue(projects);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const filter = {
  selectedTag: "all",
};

const initialState = {
  isLoading: true,
  projects: [],
  tempProjects: [],
  ...filter,
};

const projectsSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    fetchProjects: (state, { payload }) => {
      state.projects = payload;
      state.tempProjects = payload;
    },
    setTag: (state, { payload }) => {
      state.selectedTag = payload;
      state.tempProjects = state.projects.filter((project) => {
        const { tags } = project;
        return tags.includes(payload);
      });
    },
  },
  extraReducers: {
    [getAllProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload;
      state.tempProjects = payload;
    },
    [getAllProjects.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { fetchProjects, setTag } = projectsSlice;

export default projectsSlice.reducer;
