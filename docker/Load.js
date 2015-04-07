var fs = require("fs")
var http = require("http")

fs.readFile(__dirname + '/videos.json', function (err, data) {
  if (err) throw err;
  var videos = JSON.parse(data).videos
  videos.map(function(video) {
	  storeVideo(video)
  });
});

function storeVideo(video) {
	var options = {
	  hostname: 'localhost',
	  port: 9200,
	  path: '/videoswelove/videos',
	  method: 'POST',
	};

	var request = http.request(options, function(res) {
		console.log('STATUS: ' + res.statusCode)
		console.log("video" + video + " added");
		res.pipe(process.stdout)
	})
	request.write(JSON.stringify(video))
	request.end()	
}
