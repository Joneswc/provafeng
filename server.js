var express = require('express'),
var mysql = require('mysql'),
var connection = mysql.createConnection({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sql_feng_db'
}),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/FengModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Fengdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require('./api/routes/FengRoutes');
routes(app);

function handle_database(req, res) {

  pool.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      res.json({ "code": 100, "status": "Error connecting database" });
      return;
    }

    console.log('connection id ' + connection.threadId);

    connection.query("select * from data", function (err, rows) {
      connection.release();
      if (!err) {
        res.json(rows);
      }
    });

    connection.on('error', function (err) {
      res.json({ "code": 100, "status": "Error connecting database" });
      return;
    });
  });
}

app.get("/", function (req, res) {
  handle_database(req, res);
});

app.listen(port);

console.log('FENG RESTful API server started on: ' + port);
