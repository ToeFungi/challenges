/*
* Challenge
* Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
* Sample Test Cases
*
* Input:"hello world"
* Output:"Hello World"
*
* Input:"i ran there"
* Output:"I Ran There"
*/

((str) => {
	console.log(str.split(' ')
		.map(item => item.charAt(0).toUpperCase() + item.substring(1))
		.join(' ')
	);

	return str.split(' ')
				.map(item => item.charAt(0).toUpperCase() + item.substring(1))
				.join(' ');
}) ('i ran there');

/*
* time node letter_capitalize.js
* 
* I Ran There
*
* real	 0m0.067s
* user	 0m0.064s
* sys	 0m0.004s
*/