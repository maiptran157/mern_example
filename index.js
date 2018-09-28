const express = require('express');
const PORT = process.env.PORT || 9000; //process.env is an object, environment variable
const { resolve } = require('path'); //path is a built in node module.
//If you have node installed, you have path installed.

//path is handling file pathing

const cors = require('cors');

const app = express(); //sometimes people name this variable server

app.use(cors());

app.use(express.static(resolve(__dirname, 'client', 'dist'))); //serve this folder staticly

app.use(express.json()); //TO RECEIVE POST DATA IN express, YOU NEED THIS COMMAND LINE 

app.post('/api/login', (request, response) => {
    console.log('POST DATA:', request.body);

    response.send({
        success: true,
        message: 'You are now logged in!',
        receivedData: request.body
    });
})


app.get('/api/test', (request, response) => {
    response.send({
        success: true,
        message: 'The API is working',
        date: new Date().toDateString()
    })
});

app.get('/api/user', (request, response) => {
    response.send({
        name: 'I',
        age: 'forever young',
        email: 'forever_young@mail.com'
    })
})

app.get('*', (request, response) => {
    response.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})
//any request we get will go to line 9 first and if cannot find anything will go to line 13



app.listen(PORT, () => {
    console.log('Server Running on Port:' + PORT);
})