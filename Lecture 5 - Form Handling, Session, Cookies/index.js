const express = require('express');
const app = express();

app.use(express.json());    //Json data will be read by this line. We can't use json data without this line.
app.use(express.urlencoded({extended: true}));  //url format will be read by this line. We can't use url data without this line.