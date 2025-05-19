const fs = require('fs');
const content = 'cool, great';

fs.writeFile('./blog2.txt', content, (err) => {
    if (err)
    {
        console.error('writing file error: ', err);
    }
    else
    {
        console.log('write to file successful');
    }
})