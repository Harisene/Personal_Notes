const Note = require("../models/notes.model");
const deleteArchivedNoteHandler = require("../functions/deleteArchivedNote");

module.exports.unArchiveNote = async (req, res) => {
  const { id, userId } = req.body;

  Note.findById(id, (err, note) => {
    if (!note || note.userId !== userId) res.status(404).send("Not Found");
    else if (!note.archived) {
      res.status(400).send("note is not archived");
    } else if (err) {
      console.log("Error in unArchiveNote.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      note.archived = false;
      deleteArchivedNoteHandler(note.id, () => {
        note
          .save()
          .then((note) => {
            console.log("Note UnArchived: " + note.id);
            res.status(200).json({
              note: "Note unarchived",
              id: note.id,
            });
          })
          .catch((err) => {
            console.log("Error in unArchiveNote.controller: " + err);
            res.status(500).send("Something went wrong");
          });
      });
    }
  });
};
