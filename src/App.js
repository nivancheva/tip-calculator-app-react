
import './App.css';

function App() {
  return (
    <div className='wraper'>
      <div className='container'>
        <h1>Spli<span>tter</span></h1>
        <div className='calculator'>
          <div className='calculator_input'>
            <form className='calculator_input-bill' htmlFor='bill'>
              <label >Bill
                <input 
                  type='number'
                  id='bill'
                  name='bill'
                  placeholder='0'
                />
              </label>
            </form>
            <div className='calculator_input-tip'>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <form htmlFor='custom'>
                <input
                  type="number"
                  id='custom'
                  name='custom'
                  placeholder='Custom'
                />
              </form>              
            </div>
            <form className='calculator_input-people' htmlFor='people'>
              <label>Number of people
                <input 
                  type='number'
                  id='people'
                  name='people'
                  placeholder='0'
                />
              </label>
            </form>
          </div>
          <div className='calculator_result'>
            <div className='calculator_result-amount'>
              <p>Tip Amount<span>/ person</span></p>
              <p id="amount" class="amount-input">$0.00</p>
            </div>
            <div className='calculator_result-total'>
              <p>Total<span>/ person</span></p>
              <p id="total" class="total-input">$0.00</p>
            </div>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
