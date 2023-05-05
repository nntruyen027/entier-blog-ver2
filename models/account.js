var mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const account = mongoose.model('account', accountSchema);

module.exports = account