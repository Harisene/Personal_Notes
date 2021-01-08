const express = require('express');
const router = express.Router();

const getAllNotes = require('../controllers/getAllNotes.controller');
const getArchivedNotes = require('../controllers/getArchivedNotes.controller');
const getNotArchivedNotes = require('../controllers/getNotArchivedNotes.controller');
const addNote = require('../controllers/addNote.controller');
const updateNote = require('../controllers/updateNote.controller');
const archiveNote = require('../controllers/archiveNote.controller');
const unArchiveNote = require('../controllers/unArchiveNote.controller');
const deleteNote = require('../controllers/deleteNote.controller');


router.get("/:userId", (req, res) => {    
    getAllNotes.getAllNotes(req, res);
});

router.get("/archived/:userId", (req, res) => {    
    getArchivedNotes.getArchivedNotes(req, res);
});

router.get("/notArchived/:userId", (req, res) => {    
    getNotArchivedNotes.getNotArchivedNotes(req, res);
});

router.post("/add", (req, res) => {    
    addNote.addNote(req, res);
});

router.put("/update", (req, res) => {    
    updateNote.updateNote(req, res);
});

router.put("/archive", (req, res) => {    
    archiveNote.archiveNote(req, res);
});

router.put("/unarchive", (req, res) => {    
    unArchiveNote.unArchiveNote(req, res);
});

router.delete("/delete", (req, res) => {    
    deleteNote.deleteNote(req, res);
});

module.exports = router;