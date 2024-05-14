const fs = require('fs');
const filePath = './data.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let result = '';
  for (let i = 1; i < data.length; i += 2) {
    result += data[i];
  }

  console.log(result);
});


