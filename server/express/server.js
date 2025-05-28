const express = require('express');
const { addition, subtraction, multiplication } = require('./operation.js');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello world');
})

app.post('/add', (req,res) => {
    const {a,b} = req.body;
    const result = addition(a,b);
    res.json({result: `of the  numbers is ${result}`});
})

app.post('/sub', (req,res) => {
    const {a,b} = req.body;
    const result = subtraction(a,b);
    res.json({result: `the operation is ${result}`});
})

app.post('/multi', (req,res) => {
    const {a,b} = req.body;
    const result = multiplication(a,b);
    res.json({result: `of the operation is, ${result}`});
})

app.listen('4000', () => {
    console.log('server running on port 4000');
})