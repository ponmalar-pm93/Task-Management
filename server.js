const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

//cross origin resource sharing //server to accept request from other domain

const app = express();

const API_PORT = process.env.API_PORT || 3000;

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));//http request to the console
app.use('/Images', express.static('./Images'))

require('./routes/loginUser.js')(app);
require('./routes/registerUser.js')(app);
require('./routes/findUsers.js')(app);
require('./routes/deleteUser.js')(app);
require('./routes/updateUser.js')(app);
require('./routes/allUser.js')(app);
require('./routes/singleUser.js')(app);


require('./routes/attachfile.js')(app);
require('./routes/createTask.js')(app);
require('./routes/findTask.js')(app);
require('./routes/deleteTask.js')(app);
require('./routes/updateTask.js')(app);
require('./routes/allTask.js')(app);
require('./routes/userTask.js')(app);

require('./routes/download.js')(app);
require('./routes/upload.js')(app);
require('./routes/assignTask.js')(app);
require('./routes/comment.js')(app);


//require('./routes/attachfile.js')(app);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
