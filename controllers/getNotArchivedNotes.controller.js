const Note = require("../models/notes.model");

module.exports.getNotArchivedNotes = (req, res) => {

    const userId = req.params.userId;    
    
    Note.find({ userId, archived: false }, (err, notes) => {
        if (err) {
            console.log("Error is getNotArchivedNotes.controller: "+err);
            res.status(500).send("Something went wrong");
        } else {
            console.log("sending not archived notes of "+userId)
            res.status(200).json(notes);
        }
    });
}
