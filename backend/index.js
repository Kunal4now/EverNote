require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("hello world")
})

app.listen(port, () => {
    console.log(`listening at  http://localhost:${port}`);
})

connectToMongo();
