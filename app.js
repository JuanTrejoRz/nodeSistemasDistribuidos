var express = require('express');
var app = express();
app.use(express.json());

app.get("/", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta2/:max", async function (req, res) {
    let r = {'random': Math.floor(Math.random() * (req.params.max - 0)) + 0};
    res.json(r);
});

app.put('/generasiguiente/:number', (req, res) => {
    let r = {'dato': req.params.number};
    res.json(r);
});

app.get("/ruta3", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta4", async function (req, res) {
    let r = {};
    res.json(r);
});

app.post("/ruta5/subruta/todos", function(request, response){
    response.send(request.body); 
});

app.get("/ruta6/crear", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta7/echo", async function (req, res) {
    let r = { texto: req.query.texto, nombre: req.query.nombre, proyecto:req.query.proyecto};
    res.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});