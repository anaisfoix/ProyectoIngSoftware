"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var cors = require('cors');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// conexion mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'test'
});
app.use(cors());

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.use(function (req, res, next) {
    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/pacientes/', function (req, res) {
  console.log("asdfasdas");
    connection.query('SELECT * FROM `pacientes`', function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
app.get('/pacientes/:id', function (req, res) {
    var id = req.params.id;
    connection.query('SELECT * FROM `pacientes` WHERE id=?', [id], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});

app.post('/crearpaciente/', jsonParser,function (req, res) {
  console.log(req.body);


  var id = req.body.id;
  var nombre = req.body.nombre;
  var rut = req.body.rut;
  var mails = req.body.mails;
  var phoneNumber = req.body.phoneNumber;
  var msg = req.body.msg;
  var type = req.body.type;
    connection.query('INSERT INTO pacientes(id,nombre,rut,mails,phoneNumber,msg,type) VALUES (?,?,?,?,?,?,?)', [id,nombre,rut,mails,phoneNumber,msg,type], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});

app.delete('/eliminar/:id', function (req, res) {
  connection.query("DELETE FROM `pacientes` WHERE id=?", [req.params.id], function (err, respuesta) {
      res.status(200).send("Eliminacion Exitosa");
  });

});



app.listen(port, function () {
    console.log("Backend listening at http://localhost:" + port);
});
