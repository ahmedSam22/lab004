const Todo = require("../models/todo");

const find = (query) => Todo.find(query).populate('user' , 'username -_id') //done
const create = (query) => Todo.create(query) //done
const remove = (_id) => Todo.findOneAndDelete({ _id}); //done
const edit = (_id, body) => Todo.findOneAndUpdate({_id},body); //done
module.exports = {
    find,create,remove,edit
}