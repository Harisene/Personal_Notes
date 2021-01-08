const Note = require("../models/notes.model");
const archiveNoteHandler = require("../functions/archiveNote");

module.exports.archiveNote = (req, res) => {
  const { id, userId } = req.body;

  Note.findById(id, (err, note) => {
    if (!note || note.userId !== userId) res.status(404).send("Not Found");
    else if (note.archived) {
      res.status(400).send("Already archived");
    } else {
      note.archived = true;
      archiveNoteHandler(note, () => {
        note
          .save()
          .then((note) => {
            console.log("Note archived: " + note.id);
            res.status(200).json({
              note: "Note Archived!",
              id: note.id,
            });
          })
          .catch((err) => {
            console.log("Error in archiveNote.controller: " + err);
            res.status(500).send("Something went wrong");
          });
      });
    }
  });
};
