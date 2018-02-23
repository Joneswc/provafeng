'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/FengController');

  app.route('/tasks')
    .get(fengList.list_all_tasks)

  app.route('/tasks/:taskId')
    .get(fengList.read_a_task)

  router.get('/data', (req, res) => {
    execSQLQuery('SELECT * FROM data', res);
  })

  router.get('/clientes/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM data' + filter, res);
  })

};