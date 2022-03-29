import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDRhMzA4YzQ4ZmE0OTRiZDE3MGFlIn0sImlhdCI6MTY0ODU0NzI2Nn0.wpBLUM9g2kfm8HKZs520yj2vh_Iarjpzi3ssl5dA6Og",
            }
        })
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }


    const addNote = async (title, description, tag) => {
        console.log({title, description, tag})
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDRhMzA4YzQ4ZmE0OTRiZDE3MGFlIn0sImlhdCI6MTY0ODU0NzI2Nn0.wpBLUM9g2kfm8HKZs520yj2vh_Iarjpzi3ssl5dA6Og"
            },
            body: JSON.stringify({title, description, tag})
          });
          console.log("Adding a new note")
          const note = {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          };
          setNotes(notes.concat(note))
    }

    const deleteNote = async (id) => {
        console.log(id)
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDRhMzA4YzQ4ZmE0OTRiZDE3MGFlIn0sImlhdCI6MTY0ODU0NzI2Nn0.wpBLUM9g2kfm8HKZs520yj2vh_Iarjpzi3ssl5dA6Og",
            }
        })
        const newNotes = notes.filter((note) => {return note._id !== id})
        const json = await response.json()
        console.log(json)
        setNotes(newNotes)
    }

    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDRhMzA4YzQ4ZmE0OTRiZDE3MGFlIn0sImlhdCI6MTY0ODU0NzI2Nn0.wpBLUM9g2kfm8HKZs520yj2vh_Iarjpzi3ssl5dA6Og",
                body: JSON.stringify({title, description, tag})
            }
        })
        const json = response.json()
        console.log(json)
    }

    return (
        <NoteContext.Provider value = {{notes, setNotes, addNote, deleteNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;