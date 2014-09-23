var net = require('net')

var server = net.createServer(function (socket){
	var date = new Date()
	var str = date.getFullYear() + '-' 
	if(date.getMonth() + 1 < 10)
		str = str + '0' + (date.getMonth() + 1) + '-'
	else
		str = str + (date.getMonth() + 1) + '-'
	if(date.getDate() < 10)
		str = str + '0' + date.getDate() + ' '
	else
		str = str + date.getDate() + ' '
	if(date.getHours() < 10)
		str = str + '0' + date.getHours() + ':'
	else
		str = str + date.getHours() + ':'
	if(date.getMinutes() < 10)
		str = str + '0' + date.getMinutes() + '\n'
	else
		str = str + date.getMinutes() + '\n'
	socket.end(str)
})

server.listen(process.argv[2])


