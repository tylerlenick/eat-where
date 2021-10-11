const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose
    .connect('mongodb://127.0.0.1:27017/eat_where', {useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.Connection

module.exports = db