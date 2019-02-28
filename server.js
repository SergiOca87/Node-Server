const express = require('express');
const ejs = require('ejs');

//The or is used for when a variable does not exist, like when we are in Local
const port = process.env.PORT || 3000;

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

//Badges
app.get('/badges', (req, res) => {
    res.render('about', {
        //This Object can get injected in our template
        title: 'Badges',
        description: 'This is the badges Page'
    }); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});