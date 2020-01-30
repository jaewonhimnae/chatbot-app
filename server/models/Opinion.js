const mongoose = require('mongoose');

const opinionSchema =  mongoose.Schema({
    name: String,
    opinion: String,
    email: String,
    registerDate: Date
});

const Opinion = mongoose.model('Opinion', opinionSchema);

module.exports = { Opinion }
