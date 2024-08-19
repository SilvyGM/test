const http = require('http');
/* crear servidor basico */

const server = http.createServer((req, res) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});
server.listen(3000,'localhost',(err) => {   
    console.log('servidor corriendo en el localhost puerto 3000');
});