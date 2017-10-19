const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use((req, res, next) =>{
    console.log('in middleware');
    next();
    console.log('out of middleware');
});

app.get('/', (req, res)=>{
    res.render('index');
});

const server = new http.Server(app);

server.listen(3000, ()=>{
    console.log('Server running on port 3000');
});