const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => {
	console.log('MongoDB connected');
}).catch((err) => {
	console.log('MongoDB connection error:', err);
});

// // Simple message schema to store chat messages
// const messageSchema = new mongoose.Schema({
// 	user: String,
// 	message: String,
// 	timestamp: { type: Date, default: Date.now },
// });

// const Message = mongoose.model('Message', messageSchema);

// // Socket.IO for real-time chat
// io.on('connection', (socket) => {
// 	console.log('User connected');
	
// 	// Handle incoming chat messages
// 	socket.on('chatMessage', (msg) => {
// 		const message = new Message({ user: msg.user, message: msg.message });
// 		message.save()
// 		.then(() => {
// 			io.emit('chatMessage', msg); // Broadcast to all connected clients
// 		}).catch((error) => {
// 			console.log('Error saving message:', error);
// 		});
// 	});
	
// 	socket.on('disconnect', () => {
// 		console.log('User disconnected');
// 	});
// });

app.get("/", (req, res) => {
	res.send("Hello");
})
// Start the server
server.listen(3000, () => {
	console.log('Server running on port http://localhost:3000');
});