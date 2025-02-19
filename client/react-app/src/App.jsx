import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DataProvider } from "./Components/MyContext.jsx";
import Login from './Components/Login.jsx'; 
import MessageBody from './Components/MessageBody.jsx';
import './App.css';
import { useEffect } from "react";
import socket from "./socket.js";

function App() {
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
