const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Liste des dossiers :');
  files.forEach(file => {
    console.log(file);
  });
});
