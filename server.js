var express = require('express'); 
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var stream = require('stream');
var renderToString = require('react-dom/server').renderToString;
var fs = require('fs');
var app = express();  

var port = process.env.PORT || 8080;   

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.use('/', express.static(__dirname + '/dist'));
app.use('/blog/css', express.static(__dirname + '/dist/css')); 
app.use('/catalog/css', express.static(__dirname + '/dist/css'));
app.use('/catalog/item/css', express.static(__dirname + '/dist/css'));
app.use('/css', express.static(__dirname + '/dist/css')); 
app.use('/scripts', express.static(__dirname + '/dist/scripts'));   
app.use(cors()); 

var urlencodedParser = bodyParser.urlencoded({
    extended : false
});  

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

app.get('/search', function(req, res ){  
  res.sendFile(__dirname + '/dist/blog.html'); 
}); 

app.get('/catalog/item/:id', function(req, res ){  
  res.sendFile(__dirname + '/dist/blog.html'); 
}); 

app.get('/blog/:id', function(req, res ){  
  currTitle = req.params.id;
  res.sendFile(__dirname + '/dist/blog.html');
});  


app.get('/blogjson', function(req, res){
  res.sendFile(__dirname + '/dist/blog.json');
});

app.post('/postBlog', urlencodedParser, function(req, res){
  console.log(req.body);
  var obj = Object.keys(req.body)[0];

  var writeStream = fs.createWriteStream(__dirname + '/dist/blog.json');
  var objStream = new stream.Readable();
  objStream.push(obj);
  objStream.push(null);

  objStream.on('data', function(chunk){
     writeStream.write(chunk);
  });

});


app.get('/inventoryjson', function(req, res){
  console.log("req received");
  res.sendFile(__dirname + '/dist/test.json');
});

app.post('/postjson', urlencodedParser, function(req, res){
  console.log("JSON RECEIVED : "); 
  
  var obj = Object.keys(req.body)[0];
  console.log(JSON.parse(JSON.stringify(obj)));

  var writeStream = fs.createWriteStream(__dirname + '/dist/test.json');
  var objStream = new stream.Readable();
  objStream.push(JSON.stringify(obj));
  objStream.push(null);

  objStream.on('data', function(chunk){
     writeStream.write(chunk);
  });
  
  //var readStream = fs.createReadStream(obj);
 
  //req.pipe(writeStream);  

  /*req.on('end', function() {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('Upload Complete!\n');
      res.end();
    });*/

});

app.listen(port);



//when 












