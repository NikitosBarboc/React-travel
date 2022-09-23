import React from 'react';
import useApp from './useApp';
import INote from '../INote';
import {nanoid} from 'nanoid';

export default function useNotes() {
  const {notes, setNotes, currentNoteId, setCurrentNoteId} = useApp();
  function createNewNote() {
    const newNote = {
        id: nanoid(),
        body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [ newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id)
  }

  function deleteNote(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, noteId: string) {
    event.stopPropagation()
    console.log(event);
    setNotes(oldNotes => oldNotes.filter(x => x.id !== noteId))
  }

  function updateNote(text: string) {
      let currentNote!: INote;
      const newNotes = notes.filter(oldNote => {

          if (oldNote.id !== currentNoteId) {
            return oldNote
          } else {
            currentNote = {...oldNote, body: text}
          }

      });

      setNotes([currentNote, ...newNotes])
  }

  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }
  return {
    createNewNote,
    deleteNote,
    updateNote,
    findCurrentNote,
    notes,
    setCurrentNoteId,
    currentNoteId
  }
}