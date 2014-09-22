var fs = require('fs')

var path = process.argv[2]

function callback(err, data){
	if(err) throw err
	else{
		var str_arr = data.split("\n")
		console.log(str_arr.length - 1)
	}
	
}

fs.readFile(path, 'utf8', callback)
