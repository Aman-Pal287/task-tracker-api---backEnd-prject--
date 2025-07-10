const Task = require('../models/Task')

// GET /tasks
exports.getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}

// GET /tasks/:id
exports.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json({ message: 'Not Found' })
    res.json(task)
}

// POST /tasks
exports.createTask = async (req, res) => {
    const task = new Task(req.body)
    await task.save()
    res.status(201).json(task)
}

// PATCH /tasks/:id
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!task) return res.status(404).json({ message: 'Not Found' })
    res.json(task)
}

// DELETE /tasks/:id
exports.deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({ message: 'Not Found' })
    res.json({ message: 'Deleted' })
}
