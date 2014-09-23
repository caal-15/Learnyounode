var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
	if(req.method=="GET"){
		res.writeHead(200, { 'Content-Type': 'application/json' })
		var parsed_url = url.parse(req.url, true)
		if(parsed_url.pathname == "/api/parsetime"){
			var date = new Date(parsed_url.query.iso)
			var json_hour = JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()})
			res.end(json_hour)
		}
		else if(parsed_url.pathname == "/api/unixtime"){
			var date = new Date(parsed_url.query.iso)
			//console.log(date.getTime())
			var unix_hour = JSON.stringify({unixtime: date.getTime()})
			res.end(unix_hour)
		}		
	}
})

server.listen(process.argv[2])
