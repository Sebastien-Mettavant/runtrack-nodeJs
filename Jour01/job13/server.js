const fs = require('fs');
const path = require('path');

const port = 8080;

const server = http.createServer((req, res) => {
    const filePath = path.resolve(__dirname, `public${req.url}`);

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.statusCode = 404;
            res.end('Page non trouvée.');
        } else {
            console.error(err);
            res.statusCode = 500;
            res.end('Erreur lors du chargement du fichier.');
        }
    }
});

server.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port} !`);
});
