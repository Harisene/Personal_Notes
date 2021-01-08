const Note = require("../models/notes.model");

module.exports.getArchivedNotes = (req, res) => {

    const userId = req.params.userId;
    console.log(userId);
    
    Note.find({ userId, archived: true }, (err, notes) => {
        if (err) {
            console.log("Error is getArchivedNotes.controller: "+err);
            res.status(500).send("Something went wrong");
        } else {
            console.log("sending archived notes of "+userId)
            res.status(200).json(notes);
        }
    });
}
