/**
 * LeetCode Challenges
 * https://leetcode.com
 */
class LeetCode {
  /**
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
   *
   * @param {number} target The specified target
   * @param {Array<number>} numbers The numbers used to find the specified target
   * @return {Array<number>} The indices of the numbers which sum to the target
   */
  problem001 (target, numbers) {
    let index;

    for (index in numbers) {
      let diff = target - numbers[index];

      if (numbers.includes(diff)) {
        let diffIndex = numbers.indexOf(diff);

        return [ parseInt(index, 10), diffIndex ];
      }
    }

    throw new Error('Match not found');
  }
}

export { LeetCode }
