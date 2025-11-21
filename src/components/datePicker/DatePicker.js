function DatePicker(props) {
    return (

        <div className="flex items-center w-full">
            <input
                id="default"
                name={props.name}
                className={`date-pickers form-input rounded-none w-full shadow-red py-3 text-lg ${props.isCurserAllowed === true ? 'cursor-not-allowed bg-[#e9e9ea]  border-[#757575]  text-[#757575]' : ''}`}
                type="date"
                value={props.value}
                onChange={props.handleChange ? (event) => props.handleChange(event, props.identity) : null}
                disabled={props.isDisable ? props.isDisable : false}
                min={props.minDate ? props.minDate : ''}
                max={props.maxDate ? props.maxDate : ''}
            />
        </div>
    );
}

export default DatePicker;
