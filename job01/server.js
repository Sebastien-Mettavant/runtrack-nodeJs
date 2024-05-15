// server.js
const express = require('express');
const app = express();
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;