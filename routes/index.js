var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", function (req, res, next) {
  res.render("home", {});
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/signUp", function (req, res, next) {
  res.render("signUp");
});

router.get("/about", function (req, res, next) {
  res.render("about");
});

router.get("/help", function (req, res, next) {
  res.render("help");
});

router.get("/contactUs", function (req, res, next) {
  res.render("contactUs");
});

//task schema
const Task = require('../models/tasks');

// Create a task
router.post('/tasks', (req, res) => {
  const { title, time, isCompleted } = req.body;

  const newTask = new Task({
    title,
    Time: time,
    IsCompleted: isCompleted,
  });

  newTask.save((err, task) => {
    if (err) {
      res.status(500).json({ error: 'Failed to create a task' });
    } else {
      res.status(201).json(task);
    }
  });
});


router.get('/tasks/complete', (req, res) => {
  const { isCompleted } = req.query;

  const query = isCompleted ? { IsCompleted: true } : {};

  Task.find(query, (err, tasks) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    } else {
      res.json(tasks);
    }
  });
});


// Get all tasks
// router.get('/tasks', (req, res) => {
//   Task.find({}, (err, tasks) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to fetch tasks' });
//     } else {
//       res.json(tasks);
//     }
//   });
// });

// // Get a specific task by ID
// router.get('/tasks/:id', (req, res) => {
//   const taskId = req.params.id;

//   Task.findById(taskId, (err, task) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to fetch task' });
//     } else if (!task) {
//       res.status(404).json({ error: 'Task not found' });
//     } else {
//       res.json(task);
//     }
//   });
// });

// // Update a task
// router.put('/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const { title, time, isCompleted } = req.body;

//   Task.findByIdAndUpdate(
//     taskId,
//     { title, Time: time, IsCompleted: isCompleted },
//     { new: true },
//     (err, updatedTask) => {
//       if (err) {
//         res.status(500).json({ error: 'Failed to update task' });
//       } else if (!updatedTask) {
//         res.status(404).json({ error: 'Task not found' });
//       } else {
//         res.json(updatedTask);
//       }
//     }
//   );
// });

// Delete a task
// router.delete('/tasks/:id', (req, res) => {
//   const taskId = req.params.id;

//   Task.findByIdAndRemove(taskId, (err, deletedTask) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to delete task' });
//     } else if (!deletedTask) {
//       res.status(404).json({ error: 'Task not found' });
//     } else {
//       res.json({ message: 'Task deleted successfully' });
//     }
//   });
// });

module.exports = router;












