import React from "react";
import { useSelector } from "react-redux";
import { NewNoteInput } from "./components/NewNoteinput";
import { NotesState } from "./notesReducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  return (
    <>
      <NewNoteInput addNote={alert} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>some {note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
