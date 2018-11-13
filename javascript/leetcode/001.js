/*
* Problem 001 - Two Sum
* 
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
*
* Example:
*
* Given nums = [2, 7, 11, 15], target = 9,
*
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
*/

((target, numbers) => {
	for (index in numbers) {
		let diff = target - numbers[index];

		if (numbers.includes(diff)) {
			let diffIndex = numbers.indexOf(diff);

			console.log([
				parseInt(index), 
				parseInt(diffIndex)
			]);

			return [
				parseInt(index), 
				parseInt(diffIndex)
			];
		}
	}

	console.log('No matches');
	return 'No matches';
}) (9, [16, 7, 11, 2]);

/*
* time node 001.js
*
* [ 1, 3 ]
*
* real	 0m0.086s
* user	 0m0.083s
* sys	 0m0.004s
*/