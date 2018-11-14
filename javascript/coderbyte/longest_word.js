/*
* Challenge
* Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
* Sample Test Cases
*
* Input:"fun&!! time"
* Output:"time"
* 
* Input:"I love dogs"
* Output:"love"
*/

((sentence) => {
	words = sentence.replace(/\W/g, ' ')
					.replace(/ +|\s/g, ' ')
					.split(' ')
					.sort((a, b) => a.length < b.length);

	console.log(words[0]);
	return words[0];
}) ("I love dogs and aeroplanes");

/*
* time node longest_word.js
* 
* aeroplanes
*
* real	 0m0.060s
* user	 0m0.053s
* sys	 0m0.008s
*/