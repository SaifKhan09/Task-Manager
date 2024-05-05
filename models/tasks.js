const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'Must provide a name for the task'],
        trim:true,
        maxLength:[20,'Name can not be more than 20 character']
    },
    completed: {
        type: Boolean,
        default:false 
    }
})

module.exports = mongoose.model('Task',TaskSchema)