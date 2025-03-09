const http = require('http');
const fs = require('fs');
const PORT = 8080;


   let server = http.createServer((_, res) => {
        const readableStream = fs.createReadStream('text1.txt', 'utf-8');
        readableStream.pipe(res);
    });

    server.listen(PORT, () => {
        console.log(`Server is connected at: ${PORT}`);
    });




