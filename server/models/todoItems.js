// import mongoose to create new Schma
const mongoose = require('mongoose');


// create Schema
const todoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('todo' , todoItemSchema);