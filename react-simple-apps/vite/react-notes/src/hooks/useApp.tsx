import React, {useEffect, useState} from 'react';
import INote from '../INote';
import {nanoid} from "nanoid"

export default function useApp() {
  const [notes, setNotes] = React.useState(() => {
    const defaultNotes = 
    JSON.parse(localStorage.getItem('notes') as string
    ) as INote[] || [] as INote[] 
    console.log('state initialize')
    return defaultNotes
  });

  const [currentNoteId, setCurrentNoteId] = React.useState(
    () => localStorage.getItem("currentNoteId") || ""
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('currentNoteId', currentNoteId);
  }, [currentNoteId]);
  
  return {notes, setNotes, currentNoteId, setCurrentNoteId}
}