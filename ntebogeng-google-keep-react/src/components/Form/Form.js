import React, { useState } from 'react';
import './Form.css';
import { uid } from 'uid';


const Form = (props) => {
  const {edit, selectedNote, toggleModal,} = props;
  const [title, setTitle] = useState((edit && selectedNote.title) ||"");
  const [text, setText] = useState((edit && selectedNote.text) ||"");
  const [isActiveForm, setIsActiveForm] = useState(edit);
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!edit) {
      const note = {
        id: uid(),
        title,
        text,
      };
      console.log(note);
      props.addNote(note);
      setIsActiveForm(false);
    } else {
      props.editNote({
        id: selectedNote.id,
        title,
        text,
      });
      toggleModal();
    }

    setTitle('');
    setText('');
  };
  
  const formClickHandler = (event) => {
    setIsActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? 'form' : ''}
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          {isActiveForm ? (
            <div className="form-actions footer">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    text_format
                  </span>
                  <span className="tooltip-text">Formatting options</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    palette
                  </span>
                  <span className="tooltip-text">Background options</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">image</span>
                  <span className="tooltip-text">Add image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined muted-icon hover">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined muted-icon hover">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="submit" className="close-btn">
                Close
              </button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
