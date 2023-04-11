const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

//cross origin resource sharing //server to accept request from other domain

const app = express();

const API_PORT = process.env.API_PORT || 3005;

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));//http request to the console

require('./routes/loginUser.js')(app);
require('./routes/registerUser.js')(app);
require('./routes/findUsers.js')(app);
require('./routes/deleteUser.js')(app);
require('./routes/updateUser.js')(app);
require('./routes/createProject.js')(app);
require('./routes/taskController.js')(app);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
