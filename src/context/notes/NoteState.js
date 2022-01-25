import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61efa9a968e48245a54f0a60",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my first note",
            "description": "This is the description of my first note",
            "tag": "General",
            "date": "2022-01-25T07:41:29.900Z",
            "__v": 0
        },
        {
            "_id": "61efa9b668e48245a54f0a62",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:42.622Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba68e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba68e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba68e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        },
        {
            "_id": "61efa9ba68e48245a54f0a64",
            "user": "61d44a308c48fa494bd170ae",
            "title": "This is my second note",
            "description": "This is the description of my second note",
            "tag": "General",
            "date": "2022-01-25T07:41:46.196Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;