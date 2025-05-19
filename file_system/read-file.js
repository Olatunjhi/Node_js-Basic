const fs = require('fs');

fs.readFile('./blog1.txt', (err,data) => {
    if (err)
    {
        console.error('could not read from the file', err);
    }
    else
    {
        console.log(data.toString());
    }
})