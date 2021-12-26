const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type : String,
        minlength : 5,
        maxlength : 20,

    },
    status : String,
    tags:{
        type : Array,
        maxlength : 10,
        required : false
    },
    user: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Users'}
    ]
})

const Todo = mongoose.model('Todo' , todoSchema)


module.exports = Todo;