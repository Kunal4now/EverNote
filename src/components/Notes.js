import React from "react";
import { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

export default function Notes() {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    useEffect(() => {
      getNotes()
    }, [])
    
    console.log(notes)
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h1>Your Notes</h1>
            {notes.map((note) => {
                console.log(note)
                return <NoteItem note = {note} key = {note._id}/>
            })}
        </div>
        </>
    );
}
