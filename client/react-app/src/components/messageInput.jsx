import {useState} from "react";
import PropTypes from "prop-types";

function MessageInput({ sendMsgFunc }){
	const [Message, setMsg] = useState("");

	const handleClick = () => {
		console.log("Message Sent: ", Message);
		sendMsgFunc(Message);
		setMsg("");
	}

    return(
		<div className="sendMsgContainer">
			{/* Value sets the first item in the box. After typing, onChange() occurs and charges the value to be whatever was changed */}
			<input className="MsgInput" type="text" value={Message} onChange={(e) => setMsg(e.target.value)}/>
			<button className="SubBtn" onClick={handleClick}>Submit</button>
		</div>
	)
}

MessageInput.propTypes = {
	sendMsgFunc: PropTypes.func.isRequired,
};

export default MessageInput