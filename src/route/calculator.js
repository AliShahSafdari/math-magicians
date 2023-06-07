import Calculator from '../components/Calculator';
import styles from '../style/calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Let`s do some math!</h2>
    <div>
      <Calculator />
    </div>
  </div>

);
export default CalculatorPage;
