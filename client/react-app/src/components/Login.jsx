import { useState } from "react";
import LoginLabel from "./LoginLabel";
import { useNavigate } from "react-router-dom";
import { useData } from "./MyContext";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function Login(){

	const {setSharedData} = useData();
	const navigate = useNavigate();
	const [userRoomInput, setUserRoomInput] = useState({user:"", room:""});

	const handleLogin = () => {
		console.log("Username: ", userRoomInput.user);
		console.log("Room Code: ", userRoomInput.room);
		setSharedData(userRoomInput);
		navigate("/chatroom");

		// Send message to backend and assign user to room
		socket.emit("joinRoom", userRoomInput);

	};

	return(
		<div className="LoginContainer">
			<div className="LoginBody">
				<p className="SignInHeader">Sign In</p>
				<hr />
				<LoginLabel 
					label="Username" 
					inputValue={userRoomInput.user} 
					setInputValue={(value) => 
					// It's an object, so you need to retain all other info and change whats needed
					setUserRoomInput(prev => ({...prev, user: value})
						)
					}>
				</LoginLabel>
				<LoginLabel 
					label="Room Code" 
					inputValue={userRoomInput.room} 
					setInputValue={(value) => 
					setUserRoomInput(prev => ({...prev, room: value})
						)
					}>
				</LoginLabel>
				<button className="LoginBtn" onClick={handleLogin}>Submit</button>
			</div>
		</div>
	);
}

export default Login;