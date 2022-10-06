import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleChange = ({ target }) => {
    setNewNote(target.value);
  };

  const addNote = (e) => {
    e.preventDefault();
    createNote({
      content: newNote,
      important: false,
    });

    setNewNote('');
  };

  return (
    <div className='formDiv'>
      <h2>Create a new note</h2>
      <form onSubmit={addNote}>
        <input type='text' value={newNote} onChange={handleChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export default NoteForm;

NoteForm.propTypes = {
  createNote: PropTypes.func.isRequired,
};
