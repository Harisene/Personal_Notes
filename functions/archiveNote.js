const fs = require("fs");

const archiveNoteHandler = (note, callBack) => {

  const fileName = `${note.id}.zip`;
  const path = `${__dirname}/../archivedNotes/`;

  fs.writeFile(path+fileName, note.content, (err)=>{
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
  callBack();
};

module.exports = archiveNoteHandler;

