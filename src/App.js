
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
                <div className='input-wrapper'>
                  <img className='icon' src='./images/icon-dollar.svg'/>
                  <input 
                    type='number'
                    id='bill'
                    name='bill'
                    placeholder='0'
                  />
                </div>
            </div>
            
            <div>
              <p>Select Tip %</p>
              <div className='calculator_input-tip'>
                <button className='button'>5%</button>
                <button className='button'>10%</button>
                <button className='button'>15%</button>
                <button className='button'>25%</button>
                <button className='button'>50%</button>
                  <input
                    type="number"
                    id='custom'
                    name='custom'
                    placeholder='Custom'
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
                  />
                </div>
            </div>
          </div>
          <div className='calculator_result'>
            <div className='calculator_result-sum amount'>
              <p className='sum-label'>Tip Amount<span className='light-text'>/ person</span></p>
              <p id="amount" className="total-sum">$0.00</p>
            </div>
            <div className='calculator_result-sum total'>
              <p className='sum-label'>Total<span className='light-text'>/ person</span></p>
              <p id="total" className="total-sum">$0.00</p>
            </div>
            <button className='button btn-reset'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
