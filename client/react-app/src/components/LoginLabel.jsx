import PropTypes from "prop-types";
function LoginLabel({label, inputValue, setInputValue}){
	return (
	<div className="LabelInputContainer">
		<input 
		className="LabelInput" 
		type="text" 
		value={inputValue} 
		onChange={(e) => {setInputValue(e.target.value)}} 
		placeholder={label} 
		required/>
	</div>
	);
}

export default LoginLabel;

LoginLabel.propTypes = {
	label: PropTypes.string,
	inputValue: PropTypes.string,
	setInputValue: PropTypes.func
};