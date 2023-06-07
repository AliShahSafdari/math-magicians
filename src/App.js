import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import CalculatorPage from './route/calculator';
import HomePage from './route/home';
import Quote from './route/quote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
