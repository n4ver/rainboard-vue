const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    description: {
        type: String,
        required: true,
        maxlength: 40,
    },
})

const Todo = model('todo', TodoSchema)

module.exports = Todo