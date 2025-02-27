const http = require('http');
const PORT = 8080;
const myServer = http.createServer((req, res)=>{
    res.end('Hello my dear friends');
});

myServer.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})