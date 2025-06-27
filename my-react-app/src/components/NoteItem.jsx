import React, { useState } from "react";

function NoteItem({ note, reload }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(note.text);

  const handleDelete = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updated = notes.filter((n) => n.id !== note.id);
    localStorage.setItem("notes", JSON.stringify(updated));
    reload();
  };

  const handleUpdate = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updated = notes.map((n) =>
      n.id === note.id ? { ...n, text: updatedText } : n
    );
    localStorage.setItem("notes", JSON.stringify(updated));
    setIsEditing(false);
    reload();
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default NoteItem;
