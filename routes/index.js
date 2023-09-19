const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();


const base_url = 'https://node4109-noderest.proen.app.ruk-com.cloud';

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));