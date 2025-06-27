import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem";

function NoteLists() {
  const [notes, setNotes] = useState([]);

  const loadNotes = () => {
    const stored = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(stored);
  };

  useEffect(() => {
    loadNotes();
    window.addEventListener("storage", loadNotes);
    return () => window.removeEventListener("storage", loadNotes);
  }, []);

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} reload={loadNotes} />
      ))}
    </div>
  );
}

export default NoteLists;
