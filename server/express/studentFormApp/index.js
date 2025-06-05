const express = require('express');
const connectDB = require('./database');
const morgan = require('morgan');
const router = require('./route');

const port = 3500;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/student',router);


app.listen(port, () => {
    connectDB();
    console.log(`server running on port ${port}`);
})