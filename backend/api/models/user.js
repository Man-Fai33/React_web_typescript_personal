const mongoose = require('mongoose')
const User = new mongoose.Schema({
     username: { type: String, required: true, unique: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     role: { type: String, required: true, default: "user" },
     gender: { type: String },
     age: { type: String },
     date: Date,
     iconUrl: { type: String, default: "" }
});


module.exports = mongoose.model('User', User);