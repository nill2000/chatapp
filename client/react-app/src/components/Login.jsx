import LoginLabel from "./LoginLabel";

function Login(){
	return(
		<div className="LoginContainer">
			<div className="LoginBody">
				<p className="SignInHeader">Sign In</p>
				<hr />
				<LoginLabel></LoginLabel>
				<LoginLabel></LoginLabel>
				<button className="LoginBtn">Submit</button>
			</div>
		</div>
	);
}

export default Login;