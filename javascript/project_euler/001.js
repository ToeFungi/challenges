/*
* Problem 1
*
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
*/

(limit => {
	let sum = 0;

	for (let x = 0; x < limit; x++) {
		if (x %  3 === 0 || x % 5 === 0) 
			sum += x;
	}

	console.log(sum);
	return sum;
}) (1000);

/*
* time node 001.js
*
* 233168
*
* real	 0m0.085s
* user	 0m0.077s
* sys	 0m0.008s
*/