var Task = require('../models/task').Task; 

exports.search = function(req, res) {
  
  var name = req.params.task_name; 
  Task.findByName(name, function(err, doc) {
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading task." + err});
    } else {
      res.json(404, { message: "Task not found."});
    }
  });
}