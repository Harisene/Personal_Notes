const Note = require("../models/notes.model");

module.exports.addNote = (req, res) => {
  const userId = req.body.userId;
  const content = req.body.content.trim();

  if (!content) {
    res.status(400).send("content can not be empty");
  } else {
    const note = new Note({
      content,
      userId,
    });

    note
      .save()
      .then((note) => {
        console.log("Note added successfully: " + note.id);
        res.status(200).json({
          note: "note added successfully",
          id: note.id,
        });
      })
      .catch((err) => {
        console.log("Error in createNote.controller: " + err);
        res.status(500).send("Something went wrong");
      });
  }
};
