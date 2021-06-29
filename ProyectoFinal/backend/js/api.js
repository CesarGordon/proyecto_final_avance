"use strict";
//aplicar en el proyecto 
// npm install body-parser / npm install router / npm install jsonwebtoken
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app = express();
var bodyParser = require('body-parser');
var bcryptjs = require('bcryptjs');
var Configuracion = {
    nombre: "127.0.0.1",
    port: 3062
};
//configuracion de la conexion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'tiquetes' //nombre de la base de datos.
});
connection.connect(function (error) {
    if (error) {
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a mysqsl');
    //aqui debemos colocar las demas weas :V
});
app.use(cors());
//para leer datos de un formulario
app.use(bodyParser.urlencoded({ extended: false }));
//metodo get q hay q enlazar con la funcion que hizo el diego AAAAAA
app.get('/', function (req, res) {
    res.send("Hola Mundo");
});
app.get('/mostrarDatos', function (req, res) {
    connection.query("SELECT * FROM tickets", function (req1, resultados) {
        //console.log(resultados);
        //res.send(resultados);
        res.status(200).send(resultados);
    });
});
app.get('/mostrarUsuarios', function (req, res) {
    connection.query("SELECT * FROM usuarios", function (req1, resultados) {
        //console.log(resultados);
        //res.send(resultados); 
        res.status(200).send(resultados);
    });
});
//insertar ticket
app.post('/crearTickets', bodyParser.json(), function (req, res) {
    var estado = req.body.estado;
    var prioridad = req.body.prioridad;
    var categoria = req.body.categoria;
    var asunto = req.body.asunto;
    var descripcion = req.body.descripcion;
    connection.query("INSERT INTO tickets(estado,prioridad,categoria,asunto,descripcion)VALUES('" + estado + "','" + prioridad + "','" + categoria + "','" + asunto + "','" + descripcion + "')", function (req1, resultado) {
        res.status(201).send(JSON.stringify("Ticket creado numero:" + resultado.insertId));
    });
});
//insertar usuario
app.post('/crearUsuario', bodyParser.json(), function (req, res) {
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var rut = req.body.rut;
    var direccion = req.body.rut;
    var region = req.body.region;
    var comuna = req.body.comuna;
    var correo = req.body.correo;
    var password = req.body.password;
    //let passwordHash = await bcryptjs.hash(password,8);
    connection.query("INSERT INTO usuarios(nombres,apellidos,rut,direccion,region,comuna,correo,password)VALUES('" + nombres + "','" + apellidos + "','" + rut + "','" + direccion + "','" + region + "','" + comuna + "','" + correo + "','" + password + "')", function (req1, resultado) {
        res.status(201).send(JSON.stringify("Usuario creado numero:" + resultado.insertId));
    });
});
//para modificar estado del ticket x id
app.put('/modificarEstado/:id', function (req, res) {
    var id = req.body.id; //SE PUEDE PONER EL LET ID=REQ.PARAMS/BODY.ID;
    var estado = req.body.estado;
    connection.query('UPDATE tickets SET estado=? WHERE id=?', [estado, id], function (req1, resultado) {
        res.status(200).send("Ticket actualizado");
    });
});
app.listen(Configuracion, function () {
    console.log("servidor escuchando localhost:" + Configuracion.port);
});
