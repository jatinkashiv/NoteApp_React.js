import React, { useState } from "react";

function AddNote() {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    if (note.trim() === "") return;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ id: Date.now(), text: note });
    localStorage.setItem("notes", JSON.stringify(notes));
    setNote("");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="add-note">
      <input
        type="text"
        value={note}
        placeholder="Write a note..."
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddNote;
