import MessageInput from "./MessageInput.jsx";
import { useData } from "./MyContext.jsx";
import { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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

		//Load messages from db first
		socket.on("loadMsgs", (data) => {
			console.log("Loaded Messages from DB");
			setMsgs(data);
		})

		// Handles incoming messages from live users
		socket.on("receiveMessage", (data) => {
			console.log("Message Received: ", data);
			setMsgs(prev => [...prev, data])
		})

		return () => {
			socket.off("loadMsgs");
			socket.off("receiveMessage");
		}
	
	}, [sharedData.user, sharedData.room, navigate, socket]);

	//Function that looks for input from login and send to backend
	const sendMsg = (newMsg) => {
		if (newMsg.trim() !== ""){

			// Emit message to backend
			socket.emit("sendMessage", {
				user: sharedData.user, 
				room: sharedData.room, 
				message: newMsg
			});

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
							<p>{Msg.user}</p>
							<p>{Msg.message}</p>
						</div>
					)
					)}
				</div>
				<MessageInput 
					socket={socket} 
					sendMsgFunc={sendMsg}>
				</MessageInput>
			</div>

		</div>
    )
}

export default MessageBody

MessageBody.propTypes = {
	socket: PropTypes.object
}