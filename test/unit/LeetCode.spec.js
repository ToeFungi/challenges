import { LeetCode } from "../../javascript/LeetCode";

describe('LeetCode', () => {
  let leetCode;

  beforeEach(() => {
    leetCode = new LeetCode();
  });

  describe('Problem 001', () => {
    const generateTestCase = (request, response) => ({ request, response });

    const testCases = [
      generateTestCase({ target: 9, numbers: [ 16, 7, 11, 2 ] }, [ 1, 3 ]),
      generateTestCase({ target: 5, numbers: [ 3, 7, 11, 2 ] }, [ 0, 3 ]),
      generateTestCase({ target: 9, numbers: [ 2, 7, 11, 15 ] }, [ 0, 1 ])
    ];

    testCases.forEach(test => {
      it('returns an array with the indices that sum up to the target', () => {
        leetCode.problem001(test.request.target, test.request.numbers)
          .should.deep.equal(test.response);
      });
    });
  });
});
