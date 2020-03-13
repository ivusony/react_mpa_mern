const express   = require('express');
const app       = express();

const path = require('path');
const fs = require('fs');
const ejs   = require('ejs');
const bodyParser    = require('body-parser');


const Render = require('./Renderer');
const renderStaticReact = require('./renderStatic');

const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/crm')
.then(function(){
    console.log("Connected to DB");
})
.catch(function(err){
    console.log(err);
})



app.set('views', [path.join(__dirname, '../views')])
app.set('view engine', ejs);

app.use('/public', express.static(path.join(__dirname, '../public')));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



import SSR from '../src/components/pages/ssr/Ssr';



app.get('*', (req, res, next)=>{
    const requested_path = req.path;

    renderStaticReact(requested_path, res);

})

app.listen(3000, function(){
    console.log('Dev server running');
})