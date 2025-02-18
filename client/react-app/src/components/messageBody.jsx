import MessageInput from "./MessageInput.jsx";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function MessageBody(){
	const [Msgs, setMsgs] = useState([]);

	useEffect(() => {
		socket.on("connect", () => {
			console.log("Connected:", socket.id);

		return () => {
			socket.disconnect();
		}
	})
	}, []);

	const sendMsg = (newMsg) => {
		if (newMsg.trim() !== ""){
			setMsgs([...Msgs, newMsg]);
		} else{
			console.log("Message is empty");
		}
	}

    return(
		<div className="MsgContainer">
			<div className="MsgBody">
				<p className="MsgBodyHeader">Messages</p>
				<hr />
				<div className="MsgList">
					{Msgs.map((Msg, index) => (
						<p key={index} className="MsgItem">
							<p>{Msg}</p>
							<p>Sender Name</p>
						</p>
					)
					)}
				</div>
				<MessageInput sendMsgFunc={sendMsg}></MessageInput>
			</div>

		</div>
    )
}

export default MessageBody