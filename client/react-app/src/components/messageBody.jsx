import MessageInput from "./MessageInput.jsx";
import { useState } from "react";

function MessageBody(){

	const [Msgs, setMsgs] = useState([]);

	const sendMsg = (newMsg) => {
		if (newMsg.trim() !== ""){
			setMsgs([...Msgs, newMsg]);
		}
	}

    return(
			<div className="MsgBody">
				<p className="MsgBodyHeader">Messages</p>
				<hr />
				<div>
					{Msgs.map((Msg, index) => (
						<p key={index}>{Msg}</p>
					))}
				</div>
				<MessageInput sendMsgFunc={sendMsg}></MessageInput>
			</div>
    )
}

export default MessageBody