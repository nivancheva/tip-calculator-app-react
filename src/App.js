
import './App.css';

function App() {
  return (
    <div className='wraper'>
      <div className='container'>
        <h1>Spli<span>tter</span></h1>
        <div className='calculator'>
          <div className='calculator_input'>
            <form className='calculator_input-bill'>
              <label>Bill</label>
              <input 
                type='number'
                placeholder='0'
              />
            </form>
            <div className='calculator_input-tip'>
              <p>5%</p>
              <p>10%</p>
              <p>15%</p>
              <p>25%</p>
              <p>50%</p>
              <form>
                <input
                  type="number"
                  name='custom'
                  id='custom'
                  placeholder='Custom'
                />
              </form>              
            </div>
            <form className='calculator_input-people'>
              <label>Number of people</label>
                <input 
                  type='number'
                  placeholder='0'
                />
            </form>
          </div>
          <div className='calculator_result'>
            <div className='calculator_result-amount'>
              <p>Tip Amount<span>/ person</span></p>
            </div>
            <div className='calculator_result-total'>
              <p>Total<span>/ person</span></p>
            </div>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
