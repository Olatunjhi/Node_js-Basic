const createStream = require('./read-streams.js');

const { readStream, writeStream } = createStream();

/**
readstream.on('data', (chunk) => {
    console.log("----NEW CHUCK----");
    console.log(chunk);
    writeStream.write("\nNEW CHUNK\n");
    writeStream.write(chunk);
})
*/
readStream.pipe(writeStream);