var express = require('express'); 
var path = require('path');
var renderToString = require('react-dom/server').renderToString;
var app = express(); 

//var AppBlog = require('./src/components/app-blog').default; 

var port = process.env.PORT || 8080;    

app.use('/', express.static(__dirname + '/dist'));
app.use('/blog/css', express.static(__dirname + '/dist/css'));
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

app.get('/blog/:id', function(req, res ){  
  currTitle = req.params.id;
  res.sendFile(__dirname + '/dist/blog.html');
}); 

/*var content = renderToString( 
				<html>
				<head>
				<script src="//code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
				<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
				<script src="//use.fontawesome.com/4a77a9db4c.js"></script>
				<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
				<link rel="stylesheet" type="text/css" href="css/main.min.css" />
				<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>   
				  <meta charset="utf-8" /> 
				  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0; /" />
				  <title>TV Apocalypse</title>
				</head>
				<body>  
				  <div id="fb-root"></div>
				  <div class="row" id="mainContainer">  
				      <div id="root"> 

				  	  <AppBlog title={req.params} />

				  	  </div> 
				      <div class="row" > 
				        <div id="addthis"></div> 
				      </div>
				  </div>
				  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-586f90208a0b3fbc"></script>
				</body>  
				<script src="./app.bundle.js"></script> 
				</html>
  			);

  res.send(content); 
*/
 

app.listen(port);