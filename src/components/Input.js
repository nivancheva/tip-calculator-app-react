export default function Input({label, id, value, setValue, iconUrl}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className='input-wrapper'>
            <img className='icon' src={iconUrl}/>
            <input 
                type='number'
                id={id}
                name={id}
                placeholder={0}
                value={value}
                onChange={(e) => {setValue(parseFloat(e.target.value))}}
                min={0}
            />
            </div>
        </div>
    )
}