import MessageInput from "./MessageInput.jsx";
function MessageBody(){
    return(
        <div>
			<div className="MsgBody">
				<p className="MsgBodyHeader">Messages</p>
				<hr />
				<MessageInput></MessageInput>
			</div>
        </div>
    )
}

export default MessageBody