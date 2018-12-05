var express = require('express');
var app = express();
var createEventController = require('./controllers/createEventController');


// set up template engine 
app.set('view engine', 'ejs');

// set up static files 
app.use('/images', express.static('images'));

// fire controllers
createEventController(app);




app.listen(4000);

