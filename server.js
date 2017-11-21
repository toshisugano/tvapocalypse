var express = require('express'); 
var path = require('path');
var renderToString = require('react-dom/server').renderToString;
var app = express(); 

//var AppBlog = require('./src/components/app-blog').default; 

var port = process.env.PORT || 8080;    

app.use('/', express.static(__dirname + '/dist'));
app.use('/blog/css', express.static(__dirname + '/dist/css')); 
app.use('/catalog/css', express.static(__dirname + '/dist/css'));
app.use('/css', express.static(__dirname + '/dist/css')); 
app.use('/scripts', express.static(__dirname + '/dist/scripts'));   
//app.use('../dist/images', express.static(__dirname + '/dist/images'));

console.log("Running");

var currTitle = "";

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

app.listen(port);