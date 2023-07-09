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


// goals schema 
const Goal = require('./GoalsSchema');

// Create a goal
router.post('/goals', (req, res) => {
  const { goaltopic, timePerday, actionForgoal, totalTime } = req.body;

  const newGoal = new Goal({
    goaltopic,
    timePerday,
    actionForgoal,
    totalTime,
  });
  newGoal.save((err, goal) => {
    if (err) {
      res.status(500).json({ error: 'Failed to create a goal' });
    } else {
      res.status(201).json(goal);
    }
  });
});
router.get('/goals/:id', (req, res) => {
  const goalId = req.params.id;

  Goal.findById(goalId, (err, goal) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch goal' });
    } else if (!goal) {
      res.status(404).json({ error: 'Goal not found' });
    } else {
      res.json(goal);
    }
  });
});


module.exports = router;









module.exports = router;












