import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import INote from "./INote"
export default function App() {
    const defaultNotes = 
      JSON.parse(localStorage.getItem('notes') as string
      ) as INote[] || [] as INote[] 
  
    const [notes, setNotes] = React.useState(() => {
      const defaultNotes = 
      JSON.parse(localStorage.getItem('notes') as string
      ) as INote[] || [] as INote[] 

      return defaultNotes
    });



    const [currentNoteId, setCurrentNoteId] = React.useState(
        () => localStorage.getItem("currentNoteId") || ""
    )
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])
    useEffect(() => {
      console.log(currentNoteId)
      localStorage.setItem('currentNoteId', currentNoteId);
      // console.log(localStorage.getItem('currentNoteId') === currentNoteId)
    }, [currentNoteId])
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [ ...prevNotes, newNote]);
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text: string) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }));
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    return (
        <main>
        {
            notes.length > 0 
            ?
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
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
