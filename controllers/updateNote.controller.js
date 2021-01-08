const Note = require("../models/notes.model");
const deleteArchivedNoteHandler = require("../functions/deleteArchivedNote");
const archiveNoteHandler = require("../functions/archiveNote");

module.exports.updateNote = (req, res) => {
  const { id, userId, content } = req.body;

  if (!content.trim()) {
    res.send("Add a content");
  } else
    Note.findById(id, (err, note) => {
      if (!note || note.userId !== userId) {
        res.status(404).send("Not Found");
      } else if (note.archived) {
        note.content = content;
        deleteArchivedNoteHandler(note.id, () => {
          archiveNoteHandler(note, () => {
            note
              .save()
              .then((note) => {
                console.log("Note updated: " + note.id);
                res.status(200).json({
                  note: "Note updated!",
                  id: note.id,
                });
              })
              .catch((err) => {
                console.log("Error in updateNote.controller: " + err);
                res.status(500).send("Something went wrong");
              });
          });
        });
      } else {
        note.content = content;
        note
          .save()
          .then((note) => {
            console.log("Note updated: " + note.id);
            res.status(200).json({
              note: "Note updated!",
              id: note.id,
            });
          })
          .catch((err) => {
            console.log("Error in updateNote.controller: " + err);
            res.status(500).send("Something went wrong");
          });
      }
    });
};
