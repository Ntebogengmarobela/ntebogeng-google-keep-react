import "./Modal.css";

export default function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="form-container">
          <form className="form" id="modal-form">
            <input
              type="text"
              id="modal-title"
              className="note-title"
              placeholder="Title"
            />
            <input
              id="modal-text"
              className="note-text"
              type="text"
              placeholder="Take a note..."
            />
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
              <button className="close-btn" id="modal-btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
