const url = require('url');

const URL = 'https://www.google.com?search=nodejs'; // Modifier le caractère & en ? pour les paramètres de requête

const parsedURL = new URL(URL);

console.log('Protocole :', parsedURL.protocol);
console.log('Nom d\'hôte :', parsedURL.hostname);
console.log('Paramètres :', parsedURL.searchParams.toString());

const newHostname = 'www.laplateforme.io';
const newParam = 'param=valeur';

const newURL = `${parsedURL.protocol}//${newHostname}${parsedURL.pathname}${parsedURL.search}&${newParam}`;

console.log('Nouvelle URL :', newURL);



