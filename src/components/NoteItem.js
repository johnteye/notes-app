// 7. Edit and delete notes (components/NoteItem.js)
import React from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../store/notesSlice';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleEdit = (newText) => {
    dispatch(editNote({
      id: note.id,
      text: newText
    }));
  };

  // Add your edit logic here

  return (
    <li>
      {note.text}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default NoteItem;
