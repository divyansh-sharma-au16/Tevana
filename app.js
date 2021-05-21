const express = require('express');
const gardenRouter = require('./routes/gardenRoute');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(express.json());
app.use(express.static('./public'));

// Routes

app.use('/api/v1/gardens', gardenRouter);
app.use('api/v1/users', userRouter);

module.exports = app;
