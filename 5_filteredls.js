var fs = require('fs')
var path = require('path');

var dir = process.argv[2];
var ext = '.'.concat(process.argv[3])

fs.readdir(dir, function (err, data){
	for(i = 0; i < data.length; i++){
		if(path.extname(data[i]) == ext)
			console.log(data[i])
	}
})
