import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DataProvider } from "./Components/MyContext.jsx";
import { useEffect } from "react";
import Login from './Components/Login.jsx'; 
import MessageBody from './Components/MessageBody.jsx';
import './styles/Login.css';
import './styles/MessageBody.css'
import socket from "./socket.js";

function App() {
	// Place Connection in App and pass as props to keep connection consistent
	useEffect(() => {
		socket.connect();
		console.log("Connected Finally");

		return () => {
			socket.disconnect();
		}
	}, []);

	return (

		<DataProvider>
			<Router>
				<Routes>
					<Route 
					path="/" 
					element={
						<Login 
							socket={socket}>
						</Login>
					}>
					</Route>

					<Route 
					path="/chatroom" 
					element={
						<MessageBody 
							socket={socket}>
						</MessageBody>
					}>
					</Route>
				</Routes>
			</Router>
		</DataProvider>
	)
}

export default App
