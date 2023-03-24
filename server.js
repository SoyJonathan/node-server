const http = require('http');

const host = "localhost"; 
const port = 8080

const tareas = [
  { id: 1, descripcion: "lavar", completado: false},
  { id: 2, descripcion: "cocinar", completado: false },
  { id: 3, descripcion: "planchar", completado: false }
];

const server = http.createServer((req, res) =>{   
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(tareas))
  res.end();
});

server.listen(port, host, () => {
  console.log(`servidor funcionando en http://${host}:${port}`);
});
