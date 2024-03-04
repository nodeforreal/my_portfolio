import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import projectsReducer from "./features/projects/projectsSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectsReducer,
  },
});

export default store; 
