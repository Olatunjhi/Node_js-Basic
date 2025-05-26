const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('content-Type', 'text/html');

    let path = './view/';

    switch (req.url) 
    {
        case '/':
            path += 'home.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.setHeader('location', '/about');
            res.statusCode = 301;
            break;
    
        default:
            path += 'notFoundPage.html';
            res.statusCode = 401;
            break;
    }

    fs.readFile(path, (err,data) => {
        if (err)
        {
            console.error('error reading file:', err);
            res.end();
        }
        else
        {
            res.end(data);
        }
    })
    
    
})

server.listen(3000, 'localhost', () => {
    console.log('server listening for response on port 3000');
})