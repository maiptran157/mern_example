const express = require('express');
const PORT = process.env.PORT || 8000; //process.env is an object, environment variable

const app = express(); //sometimes people name this variable server

app.get('/', (request, response) => {
    response.send('<h1>This is my awesome server, yay!</h1>')
});

app.listen(PORT, () => {
    console.log('Server Running on Port:' + PORT);
})