// 6. Add new notes (components/AddNoteForm.js)
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/notesSlice';

const AddNoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({
      id: Date.now(),
      text: noteText
    }));
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
