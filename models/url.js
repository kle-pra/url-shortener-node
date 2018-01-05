const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Url = mongoose.model('Url', new Schema({
    long_url: String,
    short_url: String,
}));
module.exports = Url;