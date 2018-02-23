'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/FengController');

  app.route('/tasks')
    .get(fengList.list_all_tasks)

  app.route('/tasks/:taskId')
    .get(fengList.read_a_task)

};