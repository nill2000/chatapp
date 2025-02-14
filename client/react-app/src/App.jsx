import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Login.jsx'; 
import MessageBody from './Components/MessageBody.jsx';
import './App.css';

function App() {
	return (
		<Router>

			<Routes>
				<Route path="/" element={
					<Login></Login>
				}></Route>

				<Route path="/ChatRoom" element={
						<MessageBody></MessageBody>
				}></Route>
			</Routes>

		</Router>
		
	)
}

export default App
