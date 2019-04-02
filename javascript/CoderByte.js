/**
 * CoderByte Challenges
 * https://www.coderbyte.com
 */
class CoderByte {
  /**
   * Challenge
   * Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
   * Sample Test Cases
   *
   * Input:"hello world"
   * Output:"Hello World"
   *
   * Input:"i ran there"
   * Output:"I Ran There"
   *
   * @param {string} sentence A string to be converted into Capitalised Case
   * @return {string} A sentence in Capitalised Case
   */
  letterCapitalize (sentence) {
    return sentence.split(' ')
      .map(item => item.charAt(0).toUpperCase() + item.substring(1))
      .join(' ');
  }

  /**
   * Challenge
   * Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
   * Sample Test Cases
   *
   * Input:"fun&!! time"
   * Output:"time"
   *
   * Input:"I love dogs"
   * Output:"love"
   *
   * @param {string} sentence A string to iterate over and search for longest word
   * @return {string} Longest word in the sentence
   */
  longestWord (sentence) {
    let words = sentence.replace(/\W/g, ' ')
      .replace(/ +|\s/g, ' ')
      .split(' ')
      .sort((a, b) => a.length < b.length);

    return words[0];
  }
}

export { CoderByte }
