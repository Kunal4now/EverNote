require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const morgan = require('morgan')
const app = express()

const port = 3000;

app.use(morgan('dev'))

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("hello world")
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`listening at  http://localhost:${port}`);
})

connectToMongo();
