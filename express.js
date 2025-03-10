const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.send(`<h1>this is home page</h1>`);
});
app.get('/about', (req, res)=>{
    res.send(`<h1>this is about page</h1>`)
});

app.get('/contact', (req, res)=>{
    res.send('<h1>this is contact page</h1>')
})

app.listen(port,()=>{
    console.log(`the app is listening on port ${port}`);
})