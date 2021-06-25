const express = require('express');
const path = require('path');

var app = express();
const port = process.env.PORT || 3000;
 
// middleware
// __dirname - stores path to directory
app.use(express.static(__dirname + '/assets'));
const viewPath = path.join(__dirname,'./templates/views');

// tell express to use templates instead of views. 
app.set('views',viewPath);
 
app.get('/home',(req,res)=>{
res.send({"status":"200 ok"});
});



app.set('view engine','hbs');

app.listen(port);