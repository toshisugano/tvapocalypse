var express = require('express'); 
    app = express(); 

var port = process.env.PORT || 8080;    

app.get('/', function(req, res ){ 
  res.sendFile(__dirname + '/dist/index.html');
});   

app.listen(port);