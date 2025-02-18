import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DataProvider } from "./Components/MyContext.jsx";
import Login from './Components/Login.jsx'; 
import MessageBody from './Components/MessageBody.jsx';
import './App.css';

function App() {
	return (
		<DataProvider>
			<Router>
				<Routes>
					<Route 
					path="/" 
					element={
						<Login></Login>
					}></Route>

					<Route 
					path="/chatroom" 
					element={
							<MessageBody></MessageBody>
					}></Route>
				</Routes>
			</Router>
		</DataProvider>
	)
}

export default App
