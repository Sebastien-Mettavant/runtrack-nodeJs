const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Erreur lors du chargement du fichier.');
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Page non trouvée.');
  }
});

server.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} !`);
});
