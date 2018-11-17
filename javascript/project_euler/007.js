/*
* Problem 7
*
* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
* What is the 10 001st prime number?
*/

/**
* @param limit int - nth number to find
* @param num int - position to start counting from
* @param stack array - the stack of prime numbers found
* @return int - the nth prime number
*/
((limit, num, stack = [2, 3]) => {
	while(stack.length < limit) {
		let isPrime = true;
		
		stack.forEach(item => {
			if (num % item === 0) isPrime = false;
		});
		
		if (isPrime) stack.push(num);
		num += 1;
	}
	
	console.log(stack[limit - 1]);
	return stack[limit - 1];
})(10001, 2);
