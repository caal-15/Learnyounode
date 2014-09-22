var fs = require('fs')

var path = process.argv[2]

var str = fs.readFileSync(path).toString();

var str_arr = str.split('\n');

console.log(str_arr.length - 1)
