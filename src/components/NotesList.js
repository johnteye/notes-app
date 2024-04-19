// 5. Display the list of notes (components/NotesList.js)
import React from 'react';
import { useSelector } from 'react-redux';

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  );
};

export default NotesList;
