const fs = require("fs");

const deleteArchivedNoteHandler = (id, callBack) => {
    const fileName = `${id}.zip`;
    const path = `${__dirname}/../archivedNotes/`;
    fs.unlink(path+fileName, err=>{
      if(err)
      throw err;
      console.log('File deleted successfully.');
    })
    callBack();
  }

  module.exports = deleteArchivedNoteHandler;
  