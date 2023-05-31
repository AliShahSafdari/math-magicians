import './css/CalculatorChild.css';

const Child = () => {
  const calculatorBtn = ['AC', '+/-', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const totalBtn = [];
  calculatorBtn.forEach((e) => (
    totalBtn.push(
      <button type="button" className="btn" id={e}>{e}</button>,

    )));

  return (
    <div className="but-contianers">
      {totalBtn}
    </div>
  );
};

export default Child;
