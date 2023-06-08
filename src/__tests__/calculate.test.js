import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import calculate from '../logic/calculate';
import CalculatorPage from '../route/calculator';

afterEach(() => cleanup());

describe(('Testing the calculator functions'), () => {
  it('test add operation', () => {
    render(<CalculatorPage />);
    const one = screen.getByText('5');
    const sum = screen.getByText('+');
    const two = screen.getByText('7');
    const equals = screen.getByText('=');
    const result = screen.getByTestId('result');
    fireEvent.click(one);
    fireEvent.click(sum);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(result.textContent).toBe('12');
  });

  test('test subtract operation', () => {
    render(<CalculatorPage />);
    const one = screen.getByText('5');
    const sub = screen.getByText('-');
    const two = screen.getByText('7');
    const equals = screen.getByText('=');
    const result = screen.getByTestId('result');
    fireEvent.click(one);
    fireEvent.click(sub);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(result.textContent).toBe('-2');
  });

  it('test multiply operation', () => {
    render(<CalculatorPage />);
    const one = screen.getByText('5');
    const divide = screen.getByText('÷');
    const two = screen.getByText('5');
    const equals = screen.getByText('=');
    const result = screen.getByTestId('result');
    fireEvent.click(one);
    fireEvent.click(divide);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(result.textContent).toBe('1');
  });

  test('User pressed 20 and ÷ button ( 10 ÷) but then he press x button the result will be x10', () => {
    const operationTest = { total: '20', next: null, operation: '÷' };
    expect(calculate(operationTest, 'x')).toEqual({ total: '20', next: null, operation: 'x' });
  });

  test('User pressed 5 and +/- button (5 +/-) result will be -5', () => {
    const operationTest = { total: null, next: '5', operation: null };
    expect(calculate(operationTest, '+/-')).toEqual({ total: null, next: '-5', operation: null });
  });
  test('User pressed 10 and ÷ button ( 10 ÷) but then he press x button the result will be x10', () => {
    const operationTest = { total: '10', next: null, operation: '÷' };
    expect(calculate(operationTest, 'x')).toEqual({ total: '10', next: null, operation: 'x' });
  });
});
