var express = require('express'); 
    app = express(); 

var port = process.env.PORT || 8080;    

app.use('/', express.static(__dirname + '/dist'));
app.use('/css', express.static(__dirname + '/dist/css')); 
app.use('/scripts', express.static(__dirname + '/dist/scripts'));   
app.use('../dist/images', express.static(__dirname + '/dist/images'));


app.get('/', function(req, res ){ 
  res.sendFile(__dirname + '/dist/index.html');
});   

app.listen(port);