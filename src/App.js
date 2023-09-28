
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import ResultDisplay from './components/ResultDisplay';

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(0);

  function getResultTip() {
    if (people === 0) {
      return 0;
    }
    return USDollar.format((bill*tipPercent/100) / people);
  }

  function getResultTotal() {
    if (people === 0) {
      return 0;
    }
    return USDollar.format((bill + bill*tipPercent/100) / people);
  }

  function handleReset() {
    setBill(0);
    setTipPercent(0);
    setPeople(0);
  }

  return (
    <div className='wraper'>
      <div className='container'>
        <h1>Spli<span>tter</span></h1>
        <div className='calculator'>
          <div className='calculator_input'>
            <Input 
              label="Bill"
              id="bill"
              value={bill}
              setValue={setBill}
              iconUrl='./images/icon-dollar.svg' />
            <div>
              <p>Select Tip %</p>
              <div className='calculator_input-tip'>
                {
                  [5, 10, 15, 25, 50].map((tp, idx) => {
                    const selectedClass = (tp === tipPercent) ? "selected" : '';
                    return (
                      <button key={idx} onClick={() => {setTipPercent(tp)}} className={`button ${selectedClass}`}>{tp}%</button>
                    );
                  })
                }
                <input
                  type="number"
                  id='custom'
                  name='custom'
                  placeholder='Custom'
                  value={tipPercent}
                  onChange={(e) => {setTipPercent(parseFloat(e.target.value))}}
                  min={0}
                />             
              </div>
            </div>
            <Input
              label="Number of People"
              id="people"
              value={people}
              setValue={setPeople}
              iconUrl='./images/icon-person.svg' />
          </div>
          <div className='calculator_result'>
            <ResultDisplay label="Tip Amount" amount={getResultTip()} />
            <ResultDisplay label="Total" amount={getResultTotal()} />
            <button onClick={handleReset} className='button btn-reset'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
