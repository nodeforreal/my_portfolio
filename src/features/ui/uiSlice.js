import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false
}

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers : {
    sidebarToggle: (state)=>{
      console.log(state)
      state.isSidebarOpen = !state.isSidebarOpen
    }
  }
})
console.log(uiSlice)
export const {sidebarToggle} = uiSlice.actions

export default uiSlice.reducer