import './css/Calculator.css';
import Child from './CalculatorChild';

const Component = () => (
  <div className="cal-contianer">
    <div className="diplay">0</div>
    <Child />
  </div>
);

export default Component;
