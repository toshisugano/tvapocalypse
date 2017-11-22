var express = require('express'); 
var path = require('path');
var renderToString = require('react-dom/server').renderToString;
var fs = require('fs');
var app = express(); 
  

var port = process.env.PORT || 8080;    

app.use('/', express.static(__dirname + '/dist'));
app.use('/blog/css', express.static(__dirname + '/dist/css')); 
app.use('/catalog/css', express.static(__dirname + '/dist/css'));
app.use('/css', express.static(__dirname + '/dist/css')); 
app.use('/scripts', express.static(__dirname + '/dist/scripts'));   
//app.use('../dist/images', express.static(__dirname + '/dist/images'));

console.log("Running");
 

app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
}); 

app.get('/about', function(req, res ){ 
  console.log(req.url);
  res.sendFile(__dirname + '/dist/index.html'); 
});    

app.get('/catalog/:id', function(req, res ){  
  res.sendFile(__dirname + '/dist/blog.html'); 
}); 

app.get('/blog/:id', function(req, res ){  
  currTitle = req.params.id;
  res.sendFile(__dirname + '/dist/blog.html');
});  

app.get('/blogjson', function(req, res){
  res.sendFile(__dirname + '/blog.json');
})

app.post('/blogjson', function(req, res){
  console.log("JSON RECEIVED : ");
  console.log(req);
  var file = path.normalize(__dirname + '/blog.json');
  fs.writeFile(file, req, function(err){
  	if (err) {
  		return console.log(err);
  	}
  	console.log("file saved");
  });

});

app.listen(port);