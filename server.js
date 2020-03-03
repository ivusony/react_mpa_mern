const express   = require('express');
const app       = express();

const path = require('path');
const ejs   = require('ejs');
const bodyParser    = require('body-parser');



app.set('views', [path.join(__dirname, '/views')])
app.set('view engine', ejs);

app.use('/public', express.static(path.join(__dirname, '/public')));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', (req, res)=>{
    res.render('index.ejs', {
        bundle: "home-bundle"
    });
})


app.get('/products', (req, res) => {
    res.render('index.ejs', {
        bundle: "products-bundle"
    });
})

app.get('/pricing', (req, res) => {
    res.render('index.ejs', {
        bundle: "pricing-bundle"
    });
})


app.listen(3000, function(){
    console.log('Dev server running');
})