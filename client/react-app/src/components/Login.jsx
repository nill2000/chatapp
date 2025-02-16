import { useState } from "react";
import LoginLabel from "./LoginLabel";
import { useNavigate } from "react-router-dom";

function Login(){

	const navigate = useNavigate();
	const [userInput, setUserInput] = useState("");
	const [roomInput, setRoomInput] = useState("");


	const handleLogin = () => {
		console.log("Username: ", userInput);
		console.log("Room Code: ", roomInput);
		navigate("/chatroom");
	};

	return(
		<div className="LoginContainer">
			<div className="LoginBody">
				<p className="SignInHeader">Sign In</p>
				<hr />
				<LoginLabel label="Username" inputValue={userInput} setInputValue={setUserInput}></LoginLabel>
				<LoginLabel label="Room Code" inputValue={roomInput} setInputValue={setRoomInput}></LoginLabel>
				<button className="LoginBtn" onClick={handleLogin}>Submit</button>
			</div>
		</div>
	);
}

export default Login;