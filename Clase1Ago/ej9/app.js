const express = require("express");
const app = express();
const Port = 3001;

app.get("/", (req, res) => {
  res.send("Bienvenidos a node.js - server side");
});

app.listen(Port, (err) => {
  if (err) {
    console.log(`No se pudo levantar el servidor en el puerto ${Port}`);
  } else {
    console.log(`Servidor corriendo en el puerto ${Port}`);
  }
});
