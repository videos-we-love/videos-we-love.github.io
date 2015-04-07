var arguments = process.argv.slice(2);
var port = arguments[0] || 9001

var
    url = require('url'),
    http = require('http'),
    acceptor = http.createServer().listen(port);

acceptor.on('request', function (request, response) {
    console.log('request ' + request.url);
    var options = url.parse(request.url);
    options.host = '192.168.59.103'
    options.port = 9200
    options.headers = request.headers;
    options.method = request.method;
    options.agent = false;

    var connector = http.request(options, function(serverResponse) {
		console.log('receiving response ' + serverResponse);
        response.writeHeader(serverResponse.statusCode, addCorsHeaders());
        serverResponse.pipe(response, {end : true});

    	function addCorsHeaders() {
            var headers = {}
			for (var key in serverResponse.headers) {
			  if (serverResponse.headers.hasOwnProperty(key)) {
			    headers[key] = serverResponse.headers[key]
			  }
			}

			headers['Access-Control-Allow-Origin'] = '*'
            console.log(headers)
			return headers;        		
    	}

    });
    request.pipe(connector, {end : true});
});

console.log('Listening on ' + port);
