import operate from '../logic/operate';

describe('Check for the 4 main operation +, -, / and x', () => {
  test('1 + 2 should be 3', () => {
    expect(operate(1, 2, '+')).toEqual('3');
  });
  test('5 - 2 should be 3', () => {
    expect(operate(5, 2, '-')).toEqual('3');
  });
  test('1 x 2 should be 3', () => {
    expect(operate(1, 2, 'x')).toEqual('2');
  });
  test('100 ÷ 2 should be 50', () => {
    expect(operate(100, 2, '÷')).toEqual('50');
  });
});
