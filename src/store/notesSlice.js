
import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, text } = action.payload;
      const note = state.find(note => note.id === id);
      if (note) {
        note.text = text;
      }
    },
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
