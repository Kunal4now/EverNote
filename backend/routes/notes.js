const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')
const fetchuser = require('../middleware/fetchUser')
const {body, validationResult} = require('express-validator')

router.get('/fetchallnotes',fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({user: req.user.id});
        res.json(notes)
    } catch(error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/addnote', fetchuser,[
    body('title', 'Enter a valid title').isLength({min: 3}),
    body('description', 'Description must be atleast 5 characters').isLength({min: 5})
], async (req, res) => {
    try {
        const {title, description, tag} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch(error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        let {title, description, tag} = req.body;
        let updatedNote = {}
        if (title) {
            updatedNote.title = title
        }
        if (description) {
            updatedNote.description = description
        }
        if (tag) {
            updatedNote.tag = tag
        }
        const note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        updatedNote = await Notes.findByIdAndUpdate(req.params.id, {
            $set: updatedNote
        }, {new: true})
        res.json(updatedNote)
    } catch(error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.delete('/deletenote/:id',fetchuser, async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id);
        console.log(note)
        if (!note) {
            return res.status(404).send("Not found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }
        const deletedNote = await Notes.findByIdAndDelete(req.params.id);
        res.json(deletedNote);
    } catch(error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router