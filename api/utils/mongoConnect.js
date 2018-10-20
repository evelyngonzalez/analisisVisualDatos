const mongoose = require('mongoose');

// DB Configuration parameters
const dbHost = '127.0.0.1';
const dbName = 'room_organizer_db';

// Define exported utilities
module.exports.connectMongo = function() {
  //Set up default mongoose connection
  const mongoDB = `mongodb://${dbHost}/${dbName}`;
  mongoose.connect(
    mongoDB,
    { useNewUrlParser: true },
  );

  // Get the default connection
  const db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  console.log(
    `Mongo connection established with host ${dbHost} and DB "${dbName}"`,
  );
};
