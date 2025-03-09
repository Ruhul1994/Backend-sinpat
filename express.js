const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express page</title>
    <style>
        *{
        margin : 0;
        padding : 0;
        box-sizing: border-box;
        }
        body{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
        }
        .container{
            width: 50%;
            margin: 2rem auto;
            padding: 1rem;
            background: #dddeee;
            border-radius:.5em;
        }
    .btn {
    padding: 1em;
    margin: 1em;
    cursor:pointer;
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>Express app </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga commodi dolor quisquam ipsam quaerat ratione neque molestias iste non porro architecto beatae, mollitia velit itaque ea deserunt optio dolorum.</p>
        <Button class="btn">Count +</Button>
        <Button class="btn">Add</Button>
    </div>
</body>
</html>`);
});

app.listen(port,()=>{
    console.log(`the app is listening on port ${port}`);
})