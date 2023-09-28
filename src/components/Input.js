export default function Input({label, id, setValue, icon}) {
    function handleChange(e) {
        if (!e.target.value) {
            setValue(0);
        } else {
            setValue(parseFloat(e.target.value));
        }
    }    
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className='input-wrapper'>
            <img className='icon' src={icon}/>
            <input 
                type='number'
                id={id}
                name={id}
                placeholder={0}
                onChange={handleChange}
                min={0}
            />
            </div>
        </div>
    )
}