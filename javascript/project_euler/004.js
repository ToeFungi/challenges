/*
* Problem 4
*
* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
* Find the largest palindrome made from the product of two 3-digit numbers.
*/

((x, y, limit) => {
	let highest = 0;

	while (x < limit) {
		while (y < limit) {
			let palindrome = (x * y).toString();
			let reverse = palindrome.split('').reverse().join('');

			if (palindrome === reverse && parseInt(palindrome) > parseInt(highest)) highest = palindrome;

			y++;
		}
		x++;
		y = 100;
	}

	console.log(highest);
	return highest;

}) (100, 100, 999);

/*
* time node 004.js
*
* 906609
*
* real	 0m0.608s
* user	 0m0.618s
* sys	 0m0.016s
*/