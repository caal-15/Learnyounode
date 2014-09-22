var module = require('./module.js')

var dir = process.argv[2];

var ext = process.argv[3];

module(dir, ext, function(err, data){
	if (err) throw err
	data.forEach(function(val){
		console.log(val)
	})
})
