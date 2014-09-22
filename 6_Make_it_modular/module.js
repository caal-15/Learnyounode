var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, data){
		var arr = []
		if(err)
			return callback(err)
		
		data.forEach(function (val, index){
			if(path.extname(val) === '.' + ext)
				arr.push(val)
		})
		
		callback(null, arr)
		
	})
}
