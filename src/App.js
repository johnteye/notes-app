import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';


function App() {
  const notes  = useSelector((state) => state.notes);
  return (
    <div className="App">
      <h1>Notes App</h1>
      <AddNoteForm />
      <NotesList  notes = {notes} />
      

    </div>
  );
}

export default App;
