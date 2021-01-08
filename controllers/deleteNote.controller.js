const deleteArchivedNoteHandler = require("../functions/deleteArchivedNote");
const Note = require("../models/notes.model");

module.exports.deleteNote = (req, res) => {
  const userId = req.body.userId;
  const id = req.body.id;

  Note.findById(id, (err, note) => {
    if (note && note.userId === userId) {
      const deleteNoteFromDatabase = () => {
        note
          .deleteOne()
          .then((note) => {
            console.log("Note deleted " + note.id);
            res.status(200).json({
              note: "Note Deleted!",
              id: note.id,
            });
          })
          .catch((err) => {
            console.log("Error in updateNote.controller: " + err);
            res.status(500).send("Something went wrong");
          });
      };

      if (note.archived) {
        deleteArchivedNoteHandler(note.id, deleteNoteFromDatabase);
      } else {
        deleteNoteFromDatabase();
      }
    } else if (err) {
      console.log("Error in updateNote.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      res.status(404).send("Not found");
    }
  });
};

function detectNoteFromDatabase() {}
