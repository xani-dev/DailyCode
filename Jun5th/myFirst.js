var http = require('http');
var url = require('url')
var dateTime = require('./myFirstModule');

http
	// Create a Server Object
	.createServer(function (req, res) {
		res.writeHead(200, { ContentType: 'text/html' });

        var q = url.parse(req.url, true).query
        var txt = q.year + ' ' + q.month
        // res.end(txt);
		res.write('The current date and time are: ' + dateTime.myDateTime()); //Response to the client
		res.write(req.url)
        res.end('Hello World'); //End the response
	})
	.listen(8080); //The server object listents to port 8080
