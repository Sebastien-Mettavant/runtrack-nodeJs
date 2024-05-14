const path = require('path');

const filePath = './mon-fichier.txt';

const fileName = path.basename(filePath);
const fileExtension = path.extname(filePath);
const directory = path.dirname(filePath);

console.log('Nom du fichier :', fileName);
console.log('Extension du fichier :', fileExtension);
console.log('Répertoire parent :', directory);
