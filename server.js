const express = require('express');
const ejs = require('ejs');

const app = express();

//set the templating engine
app.set('view engine', 'ejs');

//Custom middleware
app.use(( req, res, next) =>{
    console.log('middleware');
    next();
});

//Root
app.get('/index', (req, res) => {
    res.render('index.ejs', {
        //This Object can get injected in our template
        title: 'Homepage',
        description: 'Welcome to the Homepage'
    }); 
});

//About
app.get('/about', (req, res) => {
    res.render('about', {
        //This Object can get injected in our template
        title: 'About',
        description: 'Welcome to the About Page'
    }); 
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});