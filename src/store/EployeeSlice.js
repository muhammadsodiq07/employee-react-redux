import { createSlice } from "@reduxjs/toolkit";
import employeeObj from "../obj"

const initialState = employeeObj;

const employeeSlice = createSlice({
  name : "employee",
  initialState,
  reducers : {
    cancelEmployee : (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    addEmployee : (state, action) => {
      return [action.payload.obj, ...state];
    },
    editEmployee : (state, action) => {
      state.filter(item => {
        if(item.id === action.payload.elId){
          item.name = action.payload.elName
          item.email = action.payload.elEmail
          item.number = action.payload.elNumber
        }
      })
    }
  }
});

export const {cancelEmployee, addEmployee, editEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;