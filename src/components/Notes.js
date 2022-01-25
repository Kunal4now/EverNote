import React from "react";
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from "./NoteItem";

export default function Notes() {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <div className="row my-3">
            <h1>Your Notes</h1>
            {notes.map((note, index) => {
                return <NoteItem note = {note} key = {index}/>
            })}
        </div>
    );
}
