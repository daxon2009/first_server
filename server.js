var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response){
	response.end("YOUR AN ANGEL!: " + request.url);
}

var server = http.createServer(handleRequest1);

server.listen(PORT1,function(){
	console.log("Server1 is now listening on http://localhost:" + PORT1, 'something')
});

function handleRequest2(request, response){
	response.end("THE A BAD BAD PERSON!" + request.url);
}

var server = http.createServer(handleRequest2);

server.listen(PORT2,function(){
	console.log("Server2 is now listening on http://localhost:" + PORT2, 'something')
});