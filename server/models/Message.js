const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
	user: String,
	room: String,
	message: String,
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Message", MessageSchema);