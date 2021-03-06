const express = require('express');
const moment = require('moment');
const app = express();
const port = 8000;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
});

app.use('/', require('./routes/index'));

app.listen(port, function(err) {
    if(err) {
        console.log(`Error on loading the server: ${err}`);
        return;
    }

    console.log(`Server started succesfully on port: ${port}`);
});