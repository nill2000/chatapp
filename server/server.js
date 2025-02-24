const express = require('express');
const http = require('http');
const socket = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Message = require("./models/Message")

const app = express();
const server = http.createServer(app);
const io = socket(server, {
	cors: {origin: "*"}
});

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
	res.send("Hello");
})

//Function ensures db is connected first
const startServer = async () => {
	await mongoose.connect(process.env.MONGODB_URI, {})
	.then(() => {
		console.log('MongoDB connected');
	}).catch((err) => {
		console.log('MongoDB connection error:', err);
	})

	//Run the server
	server.listen(3000, () => {
		console.log('Server Running: http://localhost:3000');
	});
}

startServer();

io.on("connection", (socket) => {
	// Notifies connection from frontend
	console.log("User Connected:", socket.id);
	console.log("-----------------");

	// Socket.on listens for first param from "emit" in frontend
	socket.on("joinRoom", async (data) => {
		socket.join(data.room);
		console.log(`User "${data.user}" joined Room "${data.room}"`);

		try {
			// Load the 10 latest messages from DB and sort from ascending
			const messages = await Message.find({room: data.room}).sort({createAt: 1}).limit(10);

			//Emit to frontend to show the messages
			socket.emit("loadMsgs", messages);
			
		} catch (err){
			console.err(err);
		}
	})

	socket.on("sendMessage", async (data) => {
		// Notify where message was sent
		console.log(`Message sent to Room: ${data.room}`);

		const newMsg = new Message({
			user: data.user,
			room: data.room,
			message: data.message
		});

		try {
			await newMsg.save();
			console.log("Save Message to Database");

			// Sends the data to room number and emits info
			io.to(data.room).emit("receiveMessage",{
				user: data.user,
				message: data.message
			});

			// Notifies recipient
			console.log("Message Emitted")

		} catch (err) {
			console.err(err);
		};
	});

	socket.on("disconnect", () => {
		console.log("User Disconnected:", socket.id);
		console.log("-----------------");
	});
});