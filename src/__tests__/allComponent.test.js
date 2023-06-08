import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../route/home';
import CalculatorPage from '../route/calculator';
import Quote from '../route/quote';

describe('Test the all commponents', () => {
  it('The HomePage is rendered accurately! ', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });

  test('The CalculatorPage is rendered accurately!', async () => {
    const { container } = render(<CalculatorPage />);
    expect(container).toMatchSnapshot();
  });
  
  it('The QuotePage is rendered accurately!', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });

  
});