const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Bienvenidos a Node.js Server Side");
});
server.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});
