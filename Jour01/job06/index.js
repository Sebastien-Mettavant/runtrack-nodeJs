const fs = require('fs');

const filePath = './data.txt';

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

