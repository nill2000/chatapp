import MessageInput from "./MessageInput.jsx";
import { useData } from "./MyContext.jsx";
import { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// import { io } from "socket.io-client";
// const socket = io("http://localhost:3000");

function MessageBody({socket}){
	const {sharedData} = useData();
	const [Msgs, setMsgs] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		// Checks if user or room is empty
		if(sharedData.user === "" || sharedData.room === ""){
			navigate("/");
		}

		console.log("Navigated");

		socket.on("receiveMessage", (data) => {
			console.log("Message Received: ", data);
			setMsgs(prev => [...prev, data])
		})
	
	}, []);

	const sendMsg = (newMsg) => {
		if (newMsg.trim() !== ""){
			// Update Msgs Locally
			setMsgs(prev => [...prev, newMsg]);
			// Emit message to backend
			socket.emit("sendMessage", {room: sharedData.room, message: newMsg});

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
						<div key={index} className="MsgItem">
							<p>{Msg}</p>
							<p>{sharedData.user}</p>
						</div>
					)
					)}
				</div>
				<MessageInput socket={socket} sendMsgFunc={sendMsg}></MessageInput>
			</div>

		</div>
    )
}

export default MessageBody

MessageBody.propTypes = {
	socket: PropTypes.object
}