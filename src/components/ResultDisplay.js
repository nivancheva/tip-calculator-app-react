export default function ResultDisplay({label, amount}) {
    return (
        <div className='calculator_result-sum'>
            <p className='sum-label'>{label}<span className='light-text'>/ person</span></p>
            <p id="total" className="total-sum">{amount}</p>
        </div>
    );
}