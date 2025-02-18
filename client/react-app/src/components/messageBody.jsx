import MessageInput from "./MessageInput.jsx";
import { useData } from "./MyContext.jsx";
import { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function MessageBody(){
	const {sharedData} = useData();
	const [Msgs, setMsgs] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		// Checks if user or room is empty
		if(sharedData.user == "" | sharedData.room == ""){
			// Go to login page
			navigate("/");
		}

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
				<p className="MsgBodyHeader">Room: {sharedData.room}</p>
				<hr />
				<div className="MsgList">
					{Msgs.map((Msg, index) => (
						<p key={index} className="MsgItem">
							<p>{Msg}</p>
							<p>{sharedData.user}</p>
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