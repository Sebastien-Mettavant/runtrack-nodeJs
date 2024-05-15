// index.js
const app = require('./server');
const router = require('./routes');

// Définir les routes et les middlewares
app.get("/tasks", router)