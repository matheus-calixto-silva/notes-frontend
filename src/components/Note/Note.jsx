import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important';

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;

Note.propTypes = { note: PropTypes.object, toggleImportance: PropTypes.func };
