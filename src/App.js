
import { useState } from 'react';
import './App.css';

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
            <div className='calculator_input-bill'>
              <label htmlFor='bill'>Bill</label>
                <div className='input-wrapper'>
                  <img className='icon' src='./images/icon-dollar.svg'/>
                  <input 
                    type='number'
                    id='bill'
                    name='bill'
                    placeholder='0'
                    value={bill}
                    onChange={(e) => {setBill(parseFloat(e.target.value))}}
                    min={0}
                  />
                </div>
            </div>
            
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
            <div className='calculator_input-people'>
              <label htmlFor='people'>Number of People
              </label>
                <div className='input-wrapper'>
                  <img className='icon' src='./images/icon-person.svg'/>
                  <input 
                    type='number'
                    id='people'
                    name='people'
                    placeholder='0'
                    value={people}
                    onChange={(e) => {setPeople(parseFloat(e.target.value))}}
                    min={0}
                  />
                </div>
            </div>
          </div>
          <div className='calculator_result'>
            <div className='calculator_result-sum amount'>
              <p className='sum-label'>Tip Amount<span className='light-text'>/ person</span></p>
              <p id="amount" className="total-sum">{getResultTip()}</p>
            </div>
            <div className='calculator_result-sum total'>
              <p className='sum-label'>Total<span className='light-text'>/ person</span></p>
              <p id="total" className="total-sum">{getResultTotal()}</p>
            </div>
            <button onClick={handleReset} className='button btn-reset'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
