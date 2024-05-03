const mongoose = require("mongoose");

const connectionString = "";

mongoose.connect(connectionString);

module.exports = mongoose.connection;
