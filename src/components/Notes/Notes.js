import './Notes.css';
import Note from './Note';

const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  if (notes.length === 0) {
    return (
      <div className="notes">
        <p>Notes you add appear here.</p>
      </div>
    );
  }
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            id={note.id}
            title={note.title}
            text={note.text}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
