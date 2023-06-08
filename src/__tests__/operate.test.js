import operate from '../logic/operate';

describe('Check for the 4 main operation +, -, / and x', () => {
  test('1 + 2 should be 3', () => {
    expect(operate(1, 2, '+')).toEqual('3');
  });
});