import React, { MouseEventHandler } from "react"
import INote from '../INote';

interface ISidebarProps {
  notes: INote[],
  currentNote: INote,
  setCurrentNoteId: (id :string) => void,
  newNote: () => void,
  deleteNote: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, noteId: string) => void
}

export default function Sidebar(props: ISidebarProps) {
    const noteElements = props.notes.map((note) => {
      const noteName = note.body.split("\n")[0]

      return (<div key={note.id}>
          <div
              
              className={`title ${
                  note.id === props.currentNote.id ? "selected-note" : ""
              }`}
              onClick={() => props.setCurrentNoteId(note.id)}
          >
              <h4 className="text-snippet">{noteName}</h4>
              <button 
                    className="delete-btn"
                    onClick={(e) => props.deleteNote(e, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
          </div>
      </div>)
  })
    
    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
