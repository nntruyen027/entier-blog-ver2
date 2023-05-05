var mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    code: String,
    name: String,
    members: [{
        name: String
    }],
    summary: String,
    details: String,
    keywords: [{
        keyword: String
    }],
    status: Number
})

const project = mongoose.model('project', projectSchema);

module.exports = project