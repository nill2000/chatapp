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
		<div className="MsgContainer">
			<div className="MsgBody">
				<p className="MsgBodyHeader">Messages</p>
				<hr />
				<div className="MsgList">
					{Msgs.map((Msg, index) => (
						<p key={index} className="MsgItem">{Msg}</p>
					))}
				</div>
				<MessageInput sendMsgFunc={sendMsg}></MessageInput>
			</div>

		</div>
    )
}

export default MessageBody