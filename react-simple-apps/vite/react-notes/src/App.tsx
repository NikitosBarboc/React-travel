import React from 'react';
import Split from 'react-split';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import useNotes from './hooks/useNotes';

export default function App() {
  const {
    createNewNote,
    deleteNote,
    updateNote,
    findCurrentNote,
    notes,
    setCurrentNoteId,
    currentNoteId,
  } = useNotes();

  return (
    <main>
      {
            notes.length > 0
              ? (
                <Split
                  sizes={[30, 70]}
                  direction="horizontal"
                  className="split"
                >
                  <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                  />
                  {
                    currentNoteId
                    && notes.length > 0
                    && (
                    <Editor
                      currentNote={findCurrentNote()}
                      updateNote={updateNote}
                    />
                    )
                }
                </Split>
              )
              : (
                <div className="no-notes">
                  <h1>You have no notes</h1>
                  <button
                    type="button"
                    className="first-note"
                    onClick={createNewNote}
                  >
                    Create one now
                  </button>
                </div>
              )

        }
    </main>
  );
}
