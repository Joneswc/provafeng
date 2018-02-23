const express = require('express');
const mysql = require('mysql');
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

const routes = require('./api/routes/FengRoutes');
routes(app);

app.listen(port);

JavaScript

function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection({
    host: 'XXX',
    port: XXX,
    user: 'XXX',
    password: 'XXX',
    database: 'XXX'
  });

  connection.query(sqlQry, function (error, results, fields) {
    if (error)
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('executou!');
  });
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql_fengdb'
  });

  connection.query(sqlQry, function (error, results, fields) {
    if (error)
      res.json(error);
    else
      res.json(results);
    connection.end();
  });
}

console.log('FENG server started on: ' + port);
