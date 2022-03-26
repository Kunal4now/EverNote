import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61efa9a968e48245a5d4f0a60",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my first note",
            "description": "This is the description of my first note",
            "tag": "General",
            "date": "2022-01-25T07:41:29.900Z",
            "__v": 0
        },
        {
            "_id": "61efa9b668e48245a54f0a62d",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:42.622Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba68e48245a54f0da64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        },
        {
            "_id": "61defa9ba68e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba6d8e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba68ed48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(notesInitial);

    const addNote = (title, description, tag) => {
        console.log("Adding a new note")
        const note = {
            "_id": "61efa9ba68e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value = {{notes, setNotes, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;