import PropTypes from "prop-types";
function LoginLabel(props){
	return (
	<div className="LabelInputContainer">
		<input className="LabelInput" type="text" value={props.inputValue} onChange={(e) => {props.setInputValue(e.target.value)}} placeholder={props.label} required/>
	</div>
	);
}

export default LoginLabel;

LoginLabel.propTypes = {
	label: PropTypes.string,
	inputValue: PropTypes.string,
	setInputValue: PropTypes.func
};