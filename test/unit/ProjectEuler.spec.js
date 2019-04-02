import { ProjectEuler } from '../../javascript/ProjectEuler';

describe('Project Euler', () => {
  let projectEuler;

  beforeEach(() => {
    projectEuler = new ProjectEuler();
  });

  describe('Problem 001', () => {
    const answer = 233168;

    it(`returns ${answer}`, () => {
      const limit = 1000;

      projectEuler.problem001(limit)
        .should.deep.equal(answer);
    });
  });

  describe('Problem 002', () => {
    const answer = 4613732;

    it(`returns ${answer}`, () => {
      const sum = 2;
      const cnt = 2;
      const stack = [ 1, 2 ];

      projectEuler.problem002(sum, stack, cnt)
        .should.deep.equal(answer);
    });
  });

  describe('Problem 003', () => {
    const answer = 6857;

    it(`returns ${answer}`, () => {
      const num = 600851475143;

      projectEuler.problem003(num)
        .should.deep.equal(answer);
    });
  });

  describe('Problem 004', () => {
    const answer = 906609;

    it(`returns ${answer}`, () => {
      const x = 100;
      const y = 100;
      const limit = 999;

      projectEuler.problem004(x, y, limit)
        .should.deep.equal(answer);
    });
  });

  describe('Problem 006', () => {
    const answer = 25164150;

    it(`returns ${answer}`, () => {
      const limit = 100;

      projectEuler.problem006(limit)
        .should.deep.equal(answer);
    });
  });

  describe('Problem 007', () => {
    const answer = 104743;

    it(`returns ${answer}`, () => {
      const num = 2;
      const limit = 10001;

      projectEuler.problem007(limit, num)
        .should.deep.equal(answer);
    });
  });
});
