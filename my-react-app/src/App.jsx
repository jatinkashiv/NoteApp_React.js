import React from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteLists";

function App() {
  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <AddNote />
      <ul>
        <NoteList />
      </ul>
    </div>
  );
}
export default App;
