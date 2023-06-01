import './css/CalculatorChild.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Child = () => {
  const [state, updateState] = useState({ next: null, operation: null, total: null });
  const handleEvents = (e) => {
    const newState = calculate(state, e.target.textContent);
    updateState(newState);
  };

  const calculatorBtn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const totalBtn = [];
  calculatorBtn.forEach((but) => (
    totalBtn.push(
      <button type="button" className="btn" onClick={handleEvents} key={but} id={but}>{but}</button>,
    )));
  const { next, total, operation } = state;
  const res = (total || '') + (operation || '') + (next || '') || '0';
  const diplay = document.querySelector('.diplay');
  if (diplay !== null) {
    diplay.innerHTML = `${res}`;
  }
  return (
    <div className="but-contianers">
      {totalBtn}
    </div>
  );
};

export default Child;
