import { CoderByte } from "../../javascript/CoderByte";

const generateTestCase = (request, response) => ({ request, response });

describe('CoderByte', () => {
  let coderByte;

  beforeEach(() => {
    coderByte = new CoderByte();
  });

  describe('LetterCapitalize', () => {
    const testCases = [
      generateTestCase('hello world', 'Hello World'),
      generateTestCase('i ran there', 'I Ran There')
    ];

    testCases.forEach(test => {
      it('converts the sentence to Capitalised Case', () => {
        coderByte.letterCapitalize(test.request)
          .should.deep.equal(test.response);
      });
    });
  });

  describe('LongestWord', () => {
    const testCases = [
      generateTestCase('fun&!! time', 'time'),
      generateTestCase('I love dogs', 'love')
    ];

    testCases.forEach(test => {
      it('returns the longest word', () => {
        coderByte.longestWord(test.request)
          .should.deep.equal(test.response);
      });
    });
  });
});
