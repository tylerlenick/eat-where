import { response } from "express";

require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const apiPort = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/yelp', (req, res) => {
    const results = axios.get('https://api.yelp.com/v3/businesses/pizza-atlanta', {
        params: {
            Authorization: `Bearer ${process.env.YELP_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });

    return results;
})

app.get('/map', (req, res) => {
    res.send('map')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))