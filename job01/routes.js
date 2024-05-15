const express = require('express');
const router = express.Router();
const fs = require('fs');

const tasksData = JSON.parse(fs.readFileSync('data.json'));

// GET /tasks
router.get('/tasks', (req, res) => {
    res.json(tasksData);
});

// POST /tasks
router.post('/tasks', (req, res) => {
    const newTask = req.body;
    newTask.id = tasksData.length + 1;
    tasksData.push(newTask);
    fs.writeFileSync('data.json', JSON.stringify(tasksData));
    res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    const taskIndex = tasksData.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasksData[taskIndex] = updatedTask;
        fs.writeFileSync('data.json', JSON.stringify(tasksData));
        res.json(updatedTask);
    } else {
        res.status(404).json({
            message: 'Tâche non trouvée'
        });
    }
});

// DELETE /tasks/:id
router.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasksData.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasksData.splice(taskIndex, 1);
        fs.writeFileSync('data.json', JSON.stringify(tasksData));
        res.json({
            message: 'Tâche supprimée'
        });
    } else {
        res.status(404).json({
            message: 'Tâche non trouvée'
        });
    }
});

module.exports = router;