var express = require('express');
    psth = require('path');
    app = express(); 

var port = process.env.PORT || 8000;   


app.get('*', function(req, res ){ 
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});   

app.listen(port);