var ans = 0;
process.argv.forEach(function(val, index, array){
	
	if(index >= 2){
		ans += Number(val);
	}
});

console.log(ans);
