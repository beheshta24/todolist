const mongoose = require('mongoose');


mongoose.connect('mongodb://192.168.178.38:27017/TodoListDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB successfully!");
});

module.exports = db;