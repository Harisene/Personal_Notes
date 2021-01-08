const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const note = new Schema({
    userId: {
        type: String
    },
    content: {
        type: String
    },
    archived: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('notes', note);