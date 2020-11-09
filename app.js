const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const ejsLayout = require('express-ejs-layouts');
const path = require('path');
require('dotenv').config();
const url='mongodb+srv://Shivendra:shivendra@cluster0.yjcl6.mongodb.net/quiz?retryWrites=true&w=majority';
mongoose.connect(url, 
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true, 
        useFindAndModify: true
    })
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.log(error.message);
    })

const app = express();
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(express.static('public'))
app.use(ejsLayout);
app.set('views',path.join(__dirname,'/resources/views'));
console.log(path.join(__dirname,'/resources/views'))
app.set('view engine','ejs');
require('./routes/web')(app);

app.listen('8000', () => {
    console.log("Server Started");
})