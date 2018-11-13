/*
* Problem 3
*
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143 ?
*/

((number, cnt) => {
	while(cnt < number) {
		while(number % cnt === 0) {
			((x) => {
				number = x;
			})(number / cnt)
		}

		cnt++;
	}

	console.log(number);
	return number;
}) (10, 2);

/*
* time node 003.js
*
* 6857
*
* real	 0m0.102s
* user	 0m0.097s
* sys	 0m0.004s
*/