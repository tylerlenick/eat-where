const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./database')
const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

database.on('error', console.error.bind(console, 'MongoDB Connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))