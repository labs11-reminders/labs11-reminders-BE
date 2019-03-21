const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRoutes = require('../routes/usersRoutes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', usersRoutes);
server.use('/users/:id', usersRoutes);

server.get('/', (req, res) => {
   
    res.send("Hello there friend!");
    

});



module.exports = server;


