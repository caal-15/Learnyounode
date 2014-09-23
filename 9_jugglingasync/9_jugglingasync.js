var http = require('http')
var bl = require('bl')

var str_arr = []



var counter = 0

function juggling(index){
	http.get(process.argv[index + 2], function(response){
		response.pipe(bl(function(err, data){
			if (err)
				return console.error(err)
			str_arr[index] = data.toString()
			counter = counter + 1
			if(counter == 3){
				for(i = 0; i < 3; i++){
					console.log(str_arr[i])
				}
			}
		}))
	})
}

for(i = 0 ; i < 3; i++){
	juggling(i)
}	
