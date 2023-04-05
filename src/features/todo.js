import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, { value: action.payload, isChecked: false }];
    },
    deleteTodo: (state, action) => {
      const newTodo = [...state];
      newTodo[action.payload] = {
        ...newTodo[action.payload],
        isDeleting: true,
      };
      return newTodo;
    },
    completedTodo: (state, action) => {
      const newTodo = [...state];
      newTodo[action.payload] = {
        ...newTodo[action.payload],
        isChecked: !newTodo[action.payload].isChecked,
      };
      return newTodo;
    },
    confirmDeleteTodo: (state, action) => {
      const newTodo = [...state];
      newTodo.splice(action.payload, 1);
      return newTodo;
    },
    cancelDeleteTodo: (state, action) => {
      const newTodo = [...state];
      newTodo[action.payload] = {
        ...newTodo[action.payload],
        isDeleting: false,
      };
      return newTodo;
    },
    enableEditTodo: (state, action) => {
      const newTodo = [...state];
      newTodo[action.payload] = { ...newTodo[action.payload], isEditing: true };
      return newTodo;
    },
    editTodo: (state, action) => {
      const newTodo = [...state];
      newTodo[action.payload.todoIndex] = {
        ...newTodo[action.payload.todoIndex],
        value: action.payload.value,
        isEditing: false,
      };
      return newTodo;
    },
    cancelEditTodo: (state, action) => {
      const newTodo = [...state];
      newTodo[action.payload] = {
        ...newTodo[action.payload],
        isEditing: false,
      };
      return newTodo;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  completedTodo,
  confirmDeleteTodo,
  cancelDeleteTodo,
  enableEditTodo,
  editTodo,
  cancelEditTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
