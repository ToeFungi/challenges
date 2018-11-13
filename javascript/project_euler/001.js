(function(limit) {
	let sum = 0;

	for (let x = limit; x > 0; x--) {
		if (x %  3 === 0 || x % 5 === 0) 
			sum += x;
	}

	console.log(sum);
	return sum;
} (1000) );