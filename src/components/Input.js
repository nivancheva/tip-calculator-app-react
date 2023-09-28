export default function Input({label, id, value, setValue, icon}) {
    function handleChange(e) {
        if (!e.target.value) {
            setValue(0);
        } else {
            setValue(parseFloat(e.target.value));
        }
    }
    function getInputValue() {
        if (value === 0) {
            return "";
        }

        return value;
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
                value={getInputValue()}
                placeholder={0}
                onChange={handleChange}
                min={0}
            />
            </div>
        </div>
    )
}