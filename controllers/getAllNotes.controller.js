const Note = require('../models/notes.model');

module.exports.getAllNotes = (req, res) => {  
    
    const userId = req.params.userId;

    Note.find({userId},(err, notes)=>{
        if (err) {
            console.log("Error in getAllNotes.controller: "+err)
            res.send(err);
        } 
        else {            
            console.log("all notes length: "+notes.length);
            res.status(200).json(notes);
        }
    });
}
