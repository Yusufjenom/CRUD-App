const mongoose = require('mongoose')

const Schema = mongoose.Schema
const crudSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
    },
    status:{
        type: String,
    }
}, {timestamps: true})

const Userdb = mongoose.model('userdb', crudSchema)

module.exports = Userdb