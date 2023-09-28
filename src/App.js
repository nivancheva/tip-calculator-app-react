
import './App.css';

function App() {
  return (
    <div className='wraper'>
      <div className='container'>
        <h1>Spli<span>tter</span></h1>
        <div className='calculator'>
          <div className='calculator_input'>
            <div className='calculator_input-bill'>
              <label htmlFor='bill'>Bill</label>
                <input 
                  type='number'
                  id='bill'
                  name='bill'
                  placeholder='0'
                />
            </div>
            <div className='calculator_input-tip'>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
                <input
                  type="number"
                  id='custom'
                  name='custom'
                  placeholder='Custom'
                />             
            </div>
            <div className='calculator_input-people'>
              <label htmlFor='people'>Number of people
              </label>
                <input 
                  type='number'
                  id='people'
                  name='people'
                  placeholder='0'
                />
            </div>
          </div>
          <div className='calculator_result'>
            <div className='calculator_result-amount'>
              <p>Tip Amount<span>/ person</span></p>
              <p id="amount" className="amount-input">$0.00</p>
            </div>
            <div className='calculator_result-total'>
              <p>Total<span>/ person</span></p>
              <p id="total" className="total-input">$0.00</p>
            </div>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
