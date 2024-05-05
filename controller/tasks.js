const Task = require('../models/tasks')

const getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    }
    catch{
        res.status(500).json({msg:error});
    }
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task}); 
    }
    catch(error){
        res.status(500).json({msg:error});
    }

}

const getTask = async (req, res) => {
    const {id: taskId} = req.params
    try{
        const task = await Task.findById(taskId)
        res.status(201).json({task})
    } 
    catch(error){
       res.status(500).json({msg:error}) 
    }
}

const updateTask = async(req, res) => {
    const {id: taskId} = req.params
    try{
        const task = await Task.findByIdAndUpdate(taskId,req.body)
        res.status(201).json({task})
    } 
    catch(error){
       res.status(500).json({msg:error}) 
    }
}

const deleteTask = async (req, res) => {
    const {id: taskId} = req.params
    try{
        const task = await Task.findByIdAndDelete(taskId)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}