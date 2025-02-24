import {useState} from "react";
import PropTypes from "prop-types";

function MessageInput({ sendMsgFunc }){
	const [Message, setMsg] = useState("");

	//Submit button handle
	const handleClick = () => {
		console.log("Message Sent: ", Message);
		sendMsgFunc(Message);
		setMsg("");
	}

	//If enter key was clicked, send message to backend
	const handleKey = (event) => {
		if(event.key === "Enter"){
			event.preventDefault();
			console.log("Message Sent: ", Message);
			sendMsgFunc(Message);
			setMsg("");
		}
	}

    return(
		<div className="sendMsgContainer">
			{/* Value sets the first item in the box. After typing, onChange() occurs and charges the value to be whatever was changed */}
			<input className="MsgInput" 
			type="text" 
			value={Message} 
			//Looks for change in input
			onChange={(e) => setMsg(e.target.value)} 
			//Looks for enter key
			onKeyDown={(e) => {
				handleKey(e)
			}}/>
			<button className="SubBtn" onClick={handleClick}>Submit</button>
		</div>
	)
}

MessageInput.propTypes = {
	sendMsgFunc: PropTypes.func.isRequired,
};

export default MessageInput