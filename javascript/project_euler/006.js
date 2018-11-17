/*
* Problem 6
*
* The sum of the squares of the first ten natural numbers is,
*
* 12 + 22 + ... + 102 = 385
* The square of the sum of the first ten natural numbers is,
*
* (1 + 2 + ... + 10)2 = 552 = 3025
* Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
*
* Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

/**
* @param limit int - the number to check
* @return int - the difference between the sum squared and squared sum
*/
((limit) => {
	let x = 0;
	let y = 0;
	
	for (let i = 1; i < limit + 1; i++) {
		x += i * i;
		y += i;
	}
	
	y *= y;
	
	return y - x;
}) (100);
