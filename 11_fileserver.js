var http = require('http')
var fs = require('fs')

var ans = fs.createReadStream(process.argv[3])

var server = http.createServer(function(req, res){
	ans.pipe(res)
	//res.end()
})

server.listen(process.argv[2])
