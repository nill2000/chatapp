const express = require('express');
const http = require('http');
const socket = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socket(server, {
	cors: {origin: "*"}
});

app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
	await mongoose.connect(process.env.MONGODB_URI, {})
	.then(() => {
		console.log('MongoDB connected');
	}).catch((err) => {
		console.log('MongoDB connection error:', err);
	})
};

app.get("/", (req, res) => {
	res.send("Hello");
})

// Start the server
server.listen(3000, () => {
	console.log('Server running on port http://localhost:3000');
});

connectDB();

io.on("connection", (socket) => {
	console.log("User ID", socket.id);
	console.log("-----------------");

	socket.on("disconnect", () => {
		console.log("User Disconnected:", socket.id);
		console.log("-----------------");
	});
});