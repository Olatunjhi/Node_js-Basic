const fs = require('fs');

const createStream = () => {
    const readStream = fs.createReadStream("./largeBlog.txt", { encoding: 'utf8'});
    const writeStream = fs.createWriteStream("./largeBlog2.txt");

    return {readStream, writeStream};
}


module.exports = createStream;